const Router = require('koa-router');
const user = require('../data/user'); // 模拟数据
const router = new Router();

// 配置需要拦截的api
router
    .get('/user', (ctx, next) => {
        ctx.body = user.login
    })

module.exports = router