import express from 'express';
import { Messages } from '../models/messages';
import { loggerReqResChats } from '../logs/logs.config';

export const chatsRouter = express.Router();

chatsRouter.get('/', async (req, res) => {
  try {
    const findMsg = await Messages.find();
    loggerReqResChats.info(`Response ${JSON.stringify(findMsg)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(findMsg);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});

chatsRouter.get('/:id', async (req, res) => {
  try {
    const findMsgId = await Messages.findById(req.params.id);
    loggerReqResChats.info(`Response ${JSON.stringify(findMsgId)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(findMsgId);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});

chatsRouter.post('/', async (req, res) => {
  try {
    const addMsg = await Messages.create(req.body);
    loggerReqResChats.info(`Response ${JSON.stringify(addMsg)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(addMsg);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400);
  }
});

chatsRouter.put('/:id', async (req, res) => {
  try {
    const updateMsg = await Messages.findByIdAndUpdate(req.params.id, req.body);
    loggerReqResChats.info(`Response ${JSON.stringify(updateMsg)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(updateMsg);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400);
  }
});

chatsRouter.delete('/:id', async (req, res) => {
  try {
    const deletedMsg = await Messages.findByIdAndDelete(req.params.id);
    loggerReqResChats.info(`Response ${JSON.stringify(deletedMsg)}`);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(deletedMsg);
  } catch (error) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json(error);
  }
});
