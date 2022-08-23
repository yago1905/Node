import express from 'express';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import translate from 'translate';

export const translateRouter = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });
translate.engine = 'google';
translate.key = process.env.GOOGLE_KEY;
const pathIndex = path.resolve(`src/render/translate/`, 'index.html');

translateRouter.get('/', (req, res) => {
  fs.readFile(pathIndex, 'utf8', (err, data) => {
    if (!err) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(201).send(data);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(404).send('NOT FAUND');
    }
  });
});

translateRouter.post('/', urlencodedParser, (req, res) => {
  console.log(req.body.text);
  console.log(req.body.language);
  translate(req.body.text, req.body.language).then((data: any) => {
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
