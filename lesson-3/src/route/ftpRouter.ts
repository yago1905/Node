import express from 'express';
import fs from 'fs';

export const ftpRouter = express.Router();

ftpRouter.get('/', (req, res) => {
  let url = `${req.url}`;
  console.log('url', url);
  const list = fs.readdirSync(`.${req.url}`);
  let str = '';
  list.forEach((el) => {
    str += `<a href = "http://localhost:4000/ftp/${el}">${el}</a><br>`;
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send(str);
});

ftpRouter.get('/:id', (req, res) => {
  let url = `${req.url}`;
  let id = req.params.id;
  const list = fs.readdirSync(`./${id}`);
  let str = '';
  list.forEach((el) => {
    str += `<a href = "http://localhost:4000/ftp/${id}/${el}">${el}</a><br>`;
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(201).send(str);
});
