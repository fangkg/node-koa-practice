const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');

class Entry {
    listen(...args) {
        // 创建http服务
        const server = http.createServer((req, res) => {
            // 创建上下文
            let ctx = this.createContext(req, res);
            this.callback(ctx);
            // this.callback(req, res);

            // 数据响应
            res.end(ctx.body);
        })

        // 启动监听
        server.listen(...args);
    }

    use(callback) {
        this.callback = callback;
    }

    /**
     * 创建上下文
     * @param {*} req 
     * @param {*} res 
     */
    createContext(req, res) {
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);

        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
    }
}

module.exports = Entry;