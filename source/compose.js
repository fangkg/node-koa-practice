const add = (x, y) => x + y;
const square = z => z * z;

const fn = (x, y) => square(add(x, y));

console.log('fn:', fn(1,3));


const compose = (fun1, fun2) => (...args) => fun2(fun1(...args));

const composePro = (...[first, ...other]) => (...args) => {
    let ret = first(...args);
    other.forEach(fn => {
        ret = fn(ret);
    })
    return ret;
}

const fun = composePro(add, square, square);
console.log('composePro:', fun(2, 3));

async function function1(next) {
    console.log('function1');
    await next();
    console.log('end function1');
}

async function function2(next) {
    console.log('function2');
    await delay();
    await next();
    console.log('end function2');
}

function function3(next) {
    console.log('function3');
}

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
}

function composeRet(middlewares) {
    return function () {
        return dispatch(0);
        function dispatch(i) {
            let fn = middlewares[i];
            // fn不存在返回空Promise
            if (!fn) {
                return Promise.resolve();
            }
            return Promise.resolve(
                fn(function next() {
                    // 递归调用
                    return dispatch(i + 1)
                })
            )
        }
    }
}