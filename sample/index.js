const Koa = require('koa');
const app = new Koa();

// 切面
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const end = Date.now();
    console.log(`请求${ctx.url}耗时${parseInt(end - start)}ms`)
})
app.use(async (ctx, next) => {
    // 睡102ms
    // const expire = Date.now() + 102;
    // while(Date.now < expire){
       
    // }
    ctx.body = {
        name: 'jack'
    }
});

app.listen(3000, () => {
    console.log('koa start...')
});