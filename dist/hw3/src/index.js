"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = require("./server.config");
const chatRoute_1 = require("./route/chatRoute");
const userRoute_1 = require("./route/userRoute");
const chatsRoute_1 = require("./route/chatsRoute");
const homeRoute_1 = require("./route/homeRoute");
const translateRoute_1 = require("./route/translateRoute");
const ftpRouter_1 = require("./route/ftpRouter");
const app = (0, express_1.default)();
app.listen(server_config_1.SERVER_CONFIG.PORT, () => {
    console.log(server_config_1.SERVER_CONFIG.DESCRIPTION);
});
//мидлвара проверяющая авторизацию
app.use((req, res, next) => {
    //user:password
    if (req.header('Authorization') !== 'Basic dXNlcjpwYXNzd29yZA==') {
        res.header('WWW-Authenticate', 'Basic');
        res.sendStatus(401);
    }
    else {
        next();
    }
});
app.use('/', homeRoute_1.homeRouter);
app.use('/translate', translateRoute_1.translateRouter);
app.use('/ftp', ftpRouter_1.ftpRouter);
app.use('/chat', chatRoute_1.chatRouter);
app.use('/chats', chatsRoute_1.chatsRouter);
app.use('/users', userRoute_1.userRouter);
