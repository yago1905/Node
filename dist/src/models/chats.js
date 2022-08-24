"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chats = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const chatsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});
const handle11000 = (error, _, next) => {
    if (error.name === 'MongoServerError' &&
        error.code === 11000) {
        next(new Error('There was a dublicate key errror'));
    }
    else {
        next(error);
    }
};
chatsSchema.post('save', handle11000);
chatsSchema.post('update', handle11000);
chatsSchema.post('findOneAndUpdate', handle11000);
chatsSchema.post('insertMany', handle11000);
exports.Chats = model('Chats', chatsSchema, 'Chats');
