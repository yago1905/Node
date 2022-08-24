"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ftpRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
exports.ftpRouter = express_1.default.Router();
exports.ftpRouter.get('/', (req, res) => {
    let url = `${req.url}`;
    console.log('url', url);
    const list = fs_1.default.readdirSync(`.${req.url}`);
    let str = '';
    list.forEach((el) => {
        str += `<a href = "http://localhost:4000/ftp/${el}">${el}</a><br>`;
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send(str);
});
exports.ftpRouter.get('/:id', (req, res) => {
    let url = `${req.url}`;
    let id = req.params.id;
    const list = fs_1.default.readdirSync(`./${id}`);
    let str = '';
    list.forEach((el) => {
        str += `<a href = "http://localhost:4000/ftp/${id}/${el}">${el}</a><br>`;
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(201).send(str);
});
