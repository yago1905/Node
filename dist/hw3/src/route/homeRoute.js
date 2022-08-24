"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
exports.homeRouter = express_1.default.Router();
const pathIndex = path_1.default.resolve('src/render/home/', 'index.html');
exports.homeRouter.get('/', (req, res) => {
    fs_1.default.readFile(pathIndex, 'utf8', (err, data) => {
        if (!err) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(201).send(data);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(404).send('NOT FAUND');
        }
    });
});
//TODO
const query = (url) => {
    axios_1.default.get(`https://${url}`).then((response) => console.log(response));
};
