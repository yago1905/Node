"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.chatRouter = express_1.default.Router();
exports.chatRouter.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatRouter.get('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatRouter.post('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatRouter.put('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatRouter.delete('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
