import express from 'express';
import bodyParser from 'body-parser';

import 'dotenv/config';

import ChatRouter from './routes/chats';
import MessageRouter from './routes/messages';
//import cowsay from 'cowsay';
import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1/gb';

mongoose
  .connect(URI)
  .then(() => console.log('MONGOSE connected'))
  .catch((error) => console.log(error));

const app = express();

// Чтобы парсить json  на сервере необходимо поставить body-parsee и обюявить 2 мидлвары, одна для json, другая для форм
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/status', (req, res) => res.send('OK'));

app.use('/chats', ChatRouter);
app.use('/messages', MessageRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server has been started to http://localhost:5000`)
);
