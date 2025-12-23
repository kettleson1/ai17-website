# AI17 Outreach HQ Mobile

This is the Expo mobile app for Outreach HQ. It mirrors the web performance snapshot, lead queue, call logging, and script access.

## Setup

1) Install dependencies
- `cd mobile`
- `npm install`

2) Configure AWS Cognito (email/password + SSO)
- Update `mobile/src/services/awsConfig.js` with your Cognito User Pool values.
- Set your Hosted UI domain and redirect URLs.

3) Configure Firebase (data + payouts)
- Update `mobile/src/services/firebase.js` with your Firebase project config.
- In `mobile/src/constants/config.js`, set `useSampleData` to `false`.

4) Run the app
- `npm run start`

## Data model (Firestore)

Collections and key fields:
- `users`: `displayName`, `email`, `role`
- `leads`: `assignedTo`, `businessName`, `ownerName`, `phone`, `location`, `timezone`, `industry`, `status`, `lastContact`, `lastOutcome`
- `callLogs`: `leadId`, `createdBy`, `outcome`, `notes`, `followUp`, `timestamp`
- `appointments`: `leadId`, `createdBy`, `scheduledAt`, `status`, `payoutStatus`
- `payouts`: `userId`, `type` (instant | weekly), `amount`, `paidAt`, `sourceAppointmentId`

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
