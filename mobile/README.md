# AI17 Outreach HQ Mobile

This is the Expo mobile app for Outreach HQ. It mirrors the web performance snapshot, lead queue, call logging, and script access.

## Status update (March 6, 2026)

Implemented this morning:
- Fixed DynamoDB auth wiring to use Cognito config correctly (`Auth.Cognito` + region handling).
- Added environment-based config for sample mode and Dynamo table names.
- Added tap-to-call from Lead Detail (`tel:` link via React Native `Linking`).
- Upgraded call save flow so it can:
  - update lead status
  - write call log
  - create an appointment record when outcome is `appointment-set`
- Added Appointments screen so reps can confirm booked meetings.
- Added dashboard shortcut to open booked appointments.
- Added appointments read path with:
  - GSI query when available
  - scan fallback if the appointments GSI does not exist yet

## Setup

1) Install dependencies
- `cd mobile`
- `npm install`

2) Configure AWS Cognito (email/password + SSO)
- Update `mobile/src/services/awsConfig.js` with your Cognito User Pool values.
- Set your Hosted UI domain and redirect URLs.

3) Configure DynamoDB (data + payouts)
- Create DynamoDB tables (see "DynamoDB tables" below).
- Update `mobile/src/constants/config.js` with your table names if you changed them.
- Add your Cognito Identity Pool ID to `mobile/src/services/awsConfig.js`.
- Configure env vars listed in "Environment variables".

4) Run the app
- `npm run start`

## Environment variables

Set these in your Expo environment:

- `EXPO_PUBLIC_USE_SAMPLE_DATA=false`
- `EXPO_PUBLIC_AWS_REGION`
- `EXPO_PUBLIC_COGNITO_USER_POOL_ID`
- `EXPO_PUBLIC_COGNITO_USER_POOL_CLIENT_ID`
- `EXPO_PUBLIC_COGNITO_IDENTITY_POOL_ID`
- `EXPO_PUBLIC_COGNITO_DOMAIN`
- `EXPO_PUBLIC_COGNITO_REDIRECT_SIGN_IN`
- `EXPO_PUBLIC_COGNITO_REDIRECT_SIGN_OUT`

Optional table/index overrides:
- `EXPO_PUBLIC_DDB_LEADS_TABLE`
- `EXPO_PUBLIC_DDB_CALL_LOGS_TABLE`
- `EXPO_PUBLIC_DDB_APPOINTMENTS_TABLE`
- `EXPO_PUBLIC_DDB_PAYOUTS_TABLE`
- `EXPO_PUBLIC_DDB_APPOINTMENTS_BY_USER_INDEX` (default: `createdBy-scheduledAt-index`)

## DynamoDB tables

Create these tables (recommended names match `mobile/src/constants/config.js`):

1) `AI17Leads`
- Partition key: `leadId` (string)
- GSI: `assignedTo-index` (partition key `assignedTo`, sort key `leadId`)
- Attributes: `assignedTo`, `businessName`, `ownerName`, `phone`, `location`, `timezone`, `industry`, `status`, `lastContact`, `lastOutcome`

2) `AI17CallLogs`
- Partition key: `callLogId` (string)
- GSI: `createdBy-timestamp-index` (partition key `createdBy`, sort key `timestamp`)
- Attributes: `leadId`, `createdBy`, `outcome`, `notes`, `followUp`, `timestamp`

3) `AI17Appointments`
- Partition key: `appointmentId` (string)
- Attributes: `leadId`, `createdBy`, `scheduledAt`, `status`, `payoutStatus`
- Recommended GSI: `createdBy-scheduledAt-index` (partition key `createdBy`, sort key `scheduledAt`)

4) `AI17Payouts`
- Partition key: `payoutId` (string)
- GSI: `userId-paidAt-index` (partition key `userId`, sort key `paidAt`)
- Attributes: `userId`, `type` (instant | weekly), `amount`, `paidAt`, `sourceAppointmentId`

## Current rep workflow

1) Rep logs in.
2) Rep opens lead queue and taps a lead.
3) Rep taps `Call lead` to dial.
4) Rep logs outcome and notes.
5) If outcome is `appointment-set`, rep enters appointment time and saves.
6) Rep opens `Booked appointments` from dashboard to verify what was scheduled.

## MVP1 next steps

1) Add appointment lifecycle controls.
- Let reps/admin mark appointments `completed`, `no-show`, `cancelled`, `rescheduled`.
- Add filters on Appointments screen by status and date.

2) Harden DynamoDB data model and access.
- Ensure all required GSIs exist in every environment.
- Add DynamoDB TTL and retention policy (if needed for logs).
- Validate IAM least privilege for app users.

3) Improve appointment accuracy and UX.
- Replace free-text datetime input with native date/time picker.
- Add phone/timezone normalization and validation.
- Add duplicate-appointment prevention guardrails.

4) Add manager visibility.
- Manager dashboard view for rep activity, booked/kept appointments, and conversion rates.
- Export/report endpoint for daily performance rollups.

5) Add production readiness controls.
- Error tracking + structured logging (mobile + backend).
- Basic test coverage for services/screens.
- Internal distribution setup (EAS iOS + Android) with release checklist.

## Payments (Stripe Connect)

Stripe Connect should be handled by a backend service or Cloud Functions. The app reads payout summaries from Firestore. Keep payout creation server-side.

## Call recording

This app does not record calls. It only logs outcomes and notes.

## Lead source recommendations

Reliable sources for B2B AI transformation leads:
- Existing inbound: website contact forms, webinar signups, and AI assessment landing pages.
- Data providers: Apollo, ZoomInfo, Crunchbase, Clearbit (filter by industry + size + AI maturity).
- Partnerships: regional chambers of commerce, industry associations, MSPs, and agency partners.
- Referrals: alumni networks and customer referral loops with a clear incentive.

## Call script (default)

"Hello, this is Jim calling from AI17. We help businesses transform with AI to increase sales, reduce costs, or improve efficiency. I'd love to set up a 30-minute meeting to learn about your business and see if AI can help. Is there a time this week or next that could work?"
