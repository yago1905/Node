import path from 'path';
import fs from 'fs';
import express from 'express';
import { SERVER_CONFIG } from './server.config';
import { chatRouter } from './route/chatRoute';
import { userRouter } from './route/userRoute';
import { chatsRouter } from './route/chatsRoute';
import { homeRouter } from './route/homeRoute';
import { translateRouter } from './route/translateRoute';
import { ftpRouter } from './route/ftpRouter';

const app = express();

app.listen(SERVER_CONFIG.PORT, () => {
  console.log(SERVER_CONFIG.DESCRIPTION);
});

//мидлвара проверяющая авторизацию
app.use((req, res, next) => {
  //user:password
  if (req.header('Authorization') !== 'Basic dXNlcjpwYXNzd29yZA==') {
    res.header('WWW-Authenticate', 'Basic');
    res.sendStatus(401);
  } else {
    next();
  }
});

app.use('/', homeRouter);
app.use('/translate', translateRouter);
app.use('/ftp', ftpRouter);
app.use('/chat', chatRouter);
app.use('/chats', chatsRouter);
app.use('/users', userRouter);
