"use strict";
// /users/create
// /user/read
// //user/delete
// /user/update
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /users - GET
// /users - POST
// /users/:id - DELETE
// /users?query - PATH / PUT
const http_1 = __importDefault(require("http"));
// // import url from 'url';
const fs_1 = __importDefault(require("fs"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
// создаем сервер. CreateServer принимает 2 аргумента. 1 аргумент функция которая передает запрос 2. функция которая возвращает ответ
// const server = http.createServer((req, res) => {
//     // res.write('hello');
//     // res.end('hello 4')
//
//     // console.log('url: ', req.url ) // читаем URL с которого пришел запрос
//     // console.log('method: ', req.method) // читаем метод запроса
//     // console.log('headers: ', req.headers) // читаем заголовки запроса
//
//     //вставляем заголовки
//     // res.setHeader('test-header', 'test')
//     // изменение статуса ответа. writeHead 3 аргуметом принимает заголовки для ответа
//     // res.writeHead(200, 'OK!', {
//     //     'test-header': 'test',
//     // })
//     //
//     // res.end('end')
//
//     // проверяем по какому url идет запрос и делаем ответ
//     // if (req.url === '/user') {
//     //     res.end('User found')
//     // } else {
//     //     res.writeHead(404, 'User not found', {
//     //         'test-header': 'test'
//     //     })
//     //     res.end('User not found ')
//     // }
//
//     // проверяем запросы по методу запроса
//     // if (req.method === 'GET') {
//     //     res.end('Hello')
//     // } else if (req.method === 'POST') {
//     //     res.writeHead(405, 'method not allowed')
//     //     res.end('method not allowed')
//     // }
//
//
//     //полезная нагрузка
//     // if (req.method === 'GET') {
//     //     if (req.url) {
//     //         const {query} = url.parse(req.url, true) //если передать труе, то ответ распарсится и данные положатся в объект
//     //         console.log(query)
//     //     }
//     //
//     //     res.end('Hello')
//     // } else if (req.method === 'POST') {
//     //     let data = '';
//     //     req.on('data', (chunk) => { data += chunk })
//     //     req.on('end', () => {
//     //         console.log('data', JSON.parse(data))
//     //         //Возвращаем ответ клиенту
//     //         res.writeHead(200, 'OK',{
//     //             'Content-Type': 'application/json', // добавляем в хедер тип контента JSON чтобы ответ был в формате JSON
//     //         })
//     //         res.end(data)
//     //     })
//     //
//     //
//     //     // res.writeHead(405, 'method not allowed')
//     //     // res.end('method not allowed')
//     // }
//
//     //передача файла
//
//     const file = fs.readFileSync('./index.html')
//
//     res.writeHead(200, 'OK', {
//         // 'Content-Type': 'text/plain' // как текст
//         'Content-Type': 'text/html' //как штмл
//     })
//     res.end(file)
// })
//
// // инициализируем порт который слушает сервер
// server.listen(5555, ()=> console.log('Server been started http://localhost:5555'))
//Оптимизация\многопоточность
if (cluster_1.default.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < os_1.default.cpus().length; i++) {
        console.log(`Forking process number ${i}`);
        cluster_1.default.fork();
    }
}
else {
    console.log(`Worker ${process.pid} is running...`);
    const server = http_1.default.createServer((req, res) => {
        // setTimeout(() => {
        //     const file = fs.readFileSync('index.html');
        const readStream = fs_1.default.createReadStream('index.html');
        res.writeHead(200, 'OK', {
            'Content-Type': 'text/html',
        });
        console.log(`Send file for ${process.pid}`);
        readStream.pipe(res);
        // res.end(file);
        // }, 3000)
    });
    server.listen(5555, () => console.log('Server been started http://localhost:5555'));
}
