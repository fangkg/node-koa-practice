const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello koa!');
})
server.listen(3000, () => {
    console.log('监听端口3000！')
})