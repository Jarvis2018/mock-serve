const Koa = require('koa');
const cors = require('koa2-cors');
const router = require('./router');

const app = new Koa();

app.use(cors());

app.use(router.routes())
    .use(router.allowedMethods());

// 默认监听3000 端口
// 如果占用已有端口请修改
app.listen(3000, () => {
    console.log('mock serve is running... on http://localhost:' + 3000)
});