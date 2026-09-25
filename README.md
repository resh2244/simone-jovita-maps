# Simone & Jovita Maps

A production-ready Google Maps Address Registration Platform built with React, Firebase, Node.js, Express, Firestore, Firebase Storage, and Google Maps Platform.

## Features

- Login / Create Account
- Google Authentication
- Apple Authentication
- Address Validation
- Google Maps Autocomplete
- Live Interactive Maps
- Save Addresses
- Favorites
- QR Codes
- PDF Address Certificates
- Admin Dashboard
- Analytics
- Firestore Database
- Firebase Storage
- Responsive Design
- Dark Mode
- Progressive Web App

## Technology Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Authentication**: Firebase Authentication
- **Database**: Firestore
- **Storage**: Firebase Storage
- **Maps**: Google Maps Platform
- **AI**: Google AI Studio
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Deployment**: Cloudflare Pages

## Default Featured Home

**Villa Name**: Simone & Jovita Villa Suite

**Building**: Simone & Jovita Building

**Address**:
```
Via Sant'Anna 8
95124 Catania
Sicily
Italy
```

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
FIREBASE_APP_ID=YOUR_APP_ID
ADMIN_PASSWORD=CHANGE_ME
JWT_SECRET=CHANGE_ME
PORT=3000
```

## Project Structure

```
simone-jovita-maps/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml
│   │   ├── test.yml
│   │   ├── lint.yml
│   │   └── security.yml
│   └── ISSUE_TEMPLATE/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   ���   ├── middleware/
│   │   ├── models/
│   │   ├── database/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── server.js
├── firebase/
│   ├── firestore.rules
│   ├── storage.rules
│   ├── firebase.json
│   └── functions/
├── docs/
│   ├── SETUP.md
│   ├── DEPLOYMENT.md
│   ├── API.md
│   └── SECURITY.md
├── tests/
├── scripts/
├── docker-compose.yml
├── Dockerfile
└── package.json
```

## License

MIT
