# AI17 Outreach HQ Mobile

This is the Expo mobile app for Outreach HQ. It mirrors the web performance snapshot, lead queue, call logging, and script access.

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

4) Run the app
- `npm run start`

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

4) `AI17Payouts`
- Partition key: `payoutId` (string)
- GSI: `userId-paidAt-index` (partition key `userId`, sort key `paidAt`)
- Attributes: `userId`, `type` (instant | weekly), `amount`, `paidAt`, `sourceAppointmentId`

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
