import express from 'express';

export const chatRouter = express.Router();

chatRouter.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatRouter.get('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatRouter.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatRouter.put('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatRouter.delete('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});
