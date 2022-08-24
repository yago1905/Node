import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const homeRouter = express.Router();

const pathIndex = path.resolve('src/render/home/', 'index.html');

homeRouter.get('/', (req, res) => {
  fs.readFile(pathIndex, 'utf8', (err, data) => {
    if (!err) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(201).send(data);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(404).send('NOT FAUND');
    }
  });
});

//TODO
const query = (url: string) => {
  axios.get(`https://${url}`).then((response) => console.log(response));
};
