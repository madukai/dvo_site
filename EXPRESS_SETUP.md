# Express.js Setup Guide

This project has been converted from Webpack Dev Server to Express.js for production-ready serving.

## Installation

Install dependencies:
```bash
npm install
```

## Development

To build and run the server in development mode:
```bash
npm run dev
```

This will build the React application and start the Express server on port 3009.

## Production

To run the server in production mode:
```bash
npm start
```

The server will serve static files from:
- `/dist` - Webpack-bundled React application (primary)
- `/public` - Public static assets (fallback)

## Build Only

To build the React application without starting the server:
```bash
npm run build
```

Output will be in the `/dist` directory.

## Configuration

The Express server listens on port 3009 by default. To change the port, set the `PORT` environment variable:
```bash
PORT=3000 npm start
```

## Project Structure

```
dvo_react_site/
├── src/                    # React source files
│   ├── index.jsx
│   └── components/
├── public/                 # Static public assets
├── dist/                   # Webpack build output (generated)
├── server.js               # Express server
├── webpack.config.js       # Webpack configuration
├── package.json           
└── deploy.sh              # Deployment script
```
