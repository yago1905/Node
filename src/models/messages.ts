import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const messagesSchema = new Schema({
  chatId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    enum: ['USER', 'BOT'],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const Messages = model('Message', messagesSchema, 'messages');
