
import express from 'express';
import { createServer } from 'http';
import { handler } from './client/build/handler.js';

const app = express();
const port = 3001;

// API routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Use the SvelteKit handler as middleware
app.use(handler);

// Start the Express server
const server = createServer(app);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
