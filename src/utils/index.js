/**
 * @Description:  工具函数
 * @author Jarvis
 * @date 2018/8/15
*/

// 该项目中用到了MockJs，详细语法：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
const Mock = require('mockjs');
module.exports = {
    /**
     * 解析mockjs模板
     * @param template 规则模板
     */
    parseMock: function (template) {
        let data = ''
        if (template) {
            data = Mock.mock(template)
        }
        return data
    }
}