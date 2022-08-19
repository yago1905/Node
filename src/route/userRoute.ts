import express from 'express';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

userRouter.get('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

userRouter.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

userRouter.put('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

userRouter.delete('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});
