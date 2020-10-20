const Entry = require('./entry');
const app = new Entry();

// 切面 处理业务逻辑
// app.use((req, res) => {
//     res.writeHead(200);
//     res.end('hello koa instance!')
// })

app.use(ctx => {
    ctx.body = 'hello koa use!'
})

app.listen(3000, () => {
    console.log('监听端口已启动！')
})