import express from 'express';
import { Chat } from '../models/chat';
import { loggerReqResChat } from '../logs/logs.config';

export const chatRouter = express.Router();

chatRouter.use((req, res, next) => {
  loggerReqResChat.info(`Параметры запроса ${req.params}`);
  next();
});

chatRouter.get('/', async (req, res) => {
  try {
    const findAllChat = await Chat.find();
    loggerReqResChat.info(`Response ${JSON.stringify(findAllChat)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(findAllChat);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});

chatRouter.get('/:id', async (req, res) => {
  try {
    const findChat = await Chat.findById(req.params.id);
    loggerReqResChat.info(`Response ${JSON.stringify(findChat)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(findChat);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});

chatRouter.post('/', async (req, res) => {
  try {
    const addChat = await Chat.create(req.body);
    loggerReqResChat.info(`Response ${JSON.stringify(addChat)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(addChat);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).send(error);
  }
});

chatRouter.put('/:id', async (req, res) => {
  try {
    const updateChat = await Chat.findByIdAndUpdate(req.params.id, req.body);
    loggerReqResChat.info(`Response ${JSON.stringify(updateChat)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(updateChat);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});

chatRouter.delete('/:id', async (req, res) => {
  try {
    const deletedChat = await Chat.findByIdAndDelete(req.params.id);
    loggerReqResChat.info(`Response ${JSON.stringify(deletedChat)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(deletedChat);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});
