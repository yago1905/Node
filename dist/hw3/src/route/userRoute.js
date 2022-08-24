"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.userRouter.get('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.userRouter.post('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.userRouter.put('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
exports.userRouter.delete('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send('ok');
});
