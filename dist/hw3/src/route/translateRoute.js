"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// @ts-ignore
const translate_1 = __importDefault(require("translate"));
exports.translateRouter = express_1.default.Router();
const urlencodedParser = express_1.default.urlencoded({ extended: false });
translate_1.default.engine = 'google';
translate_1.default.key = process.env.GOOGLE_KEY;
const pathIndex = path_1.default.resolve(`src/render/translate/`, 'index.html');
exports.translateRouter.get('/', (req, res) => {
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
exports.translateRouter.post('/', urlencodedParser, (req, res) => {
    console.log(req.body.text);
    console.log(req.body.language);
    (0, translate_1.default)(req.body.text, req.body.language).then((data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(201).send(`            
            <!DOCTYPE html>
            <html lang = "en">
            <head>
            <meta charset = "UTF-8">
            <title>ПЕРЕВОДЧИК</title>
            </head>
            <body>
                <form action="http://localhost:4000/translate" method="post">
                  <input type="text" placeholder="Введите текст" name="text">
                    <br>
                        <h2>На какой язык перевести ?</h2>
                    <br>
                    <input type="radio" name="language" value="ru" id="radio_1">
                    <label for="radio_1">РУССКИЙ</label>
                    <input type="radio" name="language" value="en" id="radio_2">
                    <label for="radio_2">АНГЛИЙСКИЙ</label>
                    <input type="radio" name="language" value="fa" id="radio_3">
                    <label for="radio_3">ФАРСИ</label>
                    <input type="radio" name="language" value="hr" id="radio_4">
                    <label for="radio_4">ХОРВАТСКИЙ</label>
                    <br>
                  <button>ПЕРЕВЕСТИ</button>
            
             <p>С руского переводит плохо, лучше использоватье английский</p>
                      <h3>ВАШ ПЕРЕВОД</h3>
                        <h2>${data}</h2>
                </form>           
            </body>
            </html>
            `);
    });
});
