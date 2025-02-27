import express from 'express';
import apiRouter from './api/api-router.js';
import authRouter from './api/auth/auth-router.js';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});
app.use(express.json());
app.use('/auth', authRouter);
app.use('/api/v1', apiRouter);

export default app;
