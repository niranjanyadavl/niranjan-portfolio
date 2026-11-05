# Niranjan Yadav L — MERN Portfolio

A responsive React portfolio with an Express API and MongoDB-backed contact form.

## Stack
- MongoDB + Mongoose: stores contact messages
- Express + Node.js: REST API and validation
- React + Vite: portfolio UI

## Run locally
Requirements: Node.js 20+ and MongoDB (local installation or MongoDB Atlas).

1. Open this folder in VS Code.
2. Install root helper dependency: `npm install`
3. Install both app dependencies: `npm run install:all`
4. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI`.
5. Start both apps: `npm run dev`
6. Open `http://localhost:5173`. API health: `http://localhost:5000/api/health`.

## Deploy and share
- Deploy `client` as a Vercel project. Set `VITE_API_URL` to your deployed API URL.
- Deploy `server` as a separate Node web service (Render or Railway). Set `MONGODB_URI`, `CLIENT_ORIGIN` (your Vercel URL), and `PORT` as required by the host.
- Create a MongoDB Atlas database and use its connection string as `MONGODB_URI`.
- Redeploy the client after setting `VITE_API_URL`. The live frontend URL can then be shared with classmates.

## Personalise before publishing
Replace the placeholder email `hello@example.com`, add your actual GitHub and LinkedIn profile URLs, and add verified project repository/demo links. The contact form stores messages in MongoDB; it does not send email notifications.
