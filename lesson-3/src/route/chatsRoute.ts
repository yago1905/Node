import express from 'express';

export const chatsRouter = express.Router();

chatsRouter.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatsRouter.get('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatsRouter.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatsRouter.put('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});

chatsRouter.delete('/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send('ok');
});
