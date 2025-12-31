# AI17 Website + Mobile

AI17's marketing website and Outreach HQ mobile app live in this repo. The website highlights AI17's agent-first approach, while the mobile app mirrors core workflows like performance snapshots, lead queue, call logging, and script access.

## Repository layout

- `src/` — React + Vite website
- `mobile/` — Expo mobile application

## Website (Vite + React)

1) Install dependencies
- `npm install`

2) Run the dev server
- `npm run dev`

3) Production build and preview
- `npm run build`
- `npm run preview`

4) Lint
- `npm run lint`

## Mobile app (Expo)

1) Install dependencies
- `cd mobile`
- `npm install`

2) Configure AWS Cognito + Firebase
- Update `mobile/src/services/awsConfig.js` with your Cognito User Pool values.
- Set the Hosted UI domain and redirect URLs.
- Configure Firebase before testing.

3) Run the app
- `npm run start`

## Expo Go testing

For Expo Go, use the Hosted UI domain and set redirect URLs to the Expo AuthSession proxy URL.
