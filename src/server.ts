// import express from 'express';

// import 'dotenv/config';
// import cors from 'cors';

// import ChatRouter from './routes/chats';
// import MessageRouter from './routes/messages';
// import AuthRouter from './routes/auth';

// import mongoose from 'mongoose';
// import { errorMiddleware } from './middlewares/error';
// import { verifyToken } from './middlewares/tokenVerify';

// import onConnection from './Socket/onConnection.js';
// import { Server } from 'socket.io';
// import { createServer } from 'http';

// const URI = process.env.MONGODB_URI as string;

// mongoose
//   .connect(URI)
//   .then(() => console.log('Mongoose connected'))
//   .catch((error) => console.log(error));

// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/status', (_, res) => res.send('OK'));

// app.use('/chats', ChatRouter);
// app.use('/messages', MessageRouter);
// app.use('/', AuthRouter);

// app.get('/profile', verifyToken, (req, res) => {
//   res.send('Im secured');
// });

// app.use(errorMiddleware);

// app.all('*', (_, res) => {
//   res.status(404).json({ error: 404 });
// });

// const server = createServer(app);

// const io = new Server(server, {
//   cors: process.env.CLIENT_URI,
//   serveClient: false,
// });

// io.on('connection', (socket) => {
//   onConnection(io, socket);
// });

// app.listen(process.env.PORT || 5000, () =>
//   console.log(`Server has been started to http://localhost:${process.env.PORT}`)
// );

import os from 'os';
import mongoose from 'mongoose';
import express from 'express';
import { authUserDB } from './auth';

const app = express();

// @ts-ignore
// const ip = os.networkInterfaces().Ethernet[1].address

app.set('port', process.env.PORT || 4000);
export const SERVER_CONFIG = {
  PORT: app.get('port'),
  DESCRIPTION: ` <<Server Start>> ${new Date()} http://localhost:${app.get(
    'port'
  )}`,
};

//mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');

export const db = () =>
  mongoose
    .connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_IP}:${process.env.DP_PORT}/gb`
    )
    .then((data) => {
      console.log('Подключение к БД Успешное');
      return data;
    })
    .catch((error) => console.log(error));
