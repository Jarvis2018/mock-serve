const Router = require('koa-router');
const router = new Router();
const util = require('../utils')
const user = require('../data/user'); // 模拟数据
const email = require('../data/email'); // 模拟数据


// 配置需要拦截的api
router
    .post('/login', (ctx, next) => {
        ctx.body = user.login
    })
    .get('/email', ctx => {
        ctx.body = util.parseMock(email)
    })

module.exports = router