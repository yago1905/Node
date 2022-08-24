"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const chats_1 = __importDefault(require("./routes/chats"));
const messages_1 = __importDefault(require("./routes/messages"));
//import cowsay from 'cowsay';
const mongoose_1 = __importDefault(require("mongoose"));
const URI = 'mongodb://127.0.0.1/gb';
mongoose_1.default
    .connect(URI)
    .then(() => console.log('MONGOSE connected'))
    .catch((error) => console.log(error));
const app = (0, express_1.default)();
// Чтобы парсить json  на сервере необходимо поставить body-parsee и обюявить 2 мидлвары, одна для json, другая для форм
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.get('/status', (req, res) => res.send('OK'));
app.use('/chats', chats_1.default);
app.use('/messages', messages_1.default);
app.listen(process.env.PORT || 5000, () => console.log(`Server has been started to http://localhost:5000`));
