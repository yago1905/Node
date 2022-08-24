"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatsRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.chatsRouter = express_1.default.Router();
exports.chatsRouter.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatsRouter.get('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatsRouter.post('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatsRouter.put('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.chatsRouter.delete('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
