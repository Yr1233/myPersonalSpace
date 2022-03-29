// vue-cli的配置文件
module.exports = {
    // 通过 configureWebpack 选项，可对 webpack 进行额外的配置
    // 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
    configureWebpack: require('./webpack.config.js'),
    //服务器会将任何未知请求 (没有匹配到静态文件的请求) 代理到 http://test.my-site.com 上
    devServer: {
        proxy: { //代理
            "/api": {// 所有以"/api"开头的，均代理到"http://test.my-site.com"
                target: 'http://test.my-site.com'
            },
        },
    },
    publicPath: '/news',
    pwa: {
        iconPaths: {
            favicon32: 'lazy.gif',
            favicon16: 'lazy.gif',
            appleTouchIcon: 'lazy.gif',
            maskIcon: 'lazy.gif',
            msTileImage: 'lazy.gif'
        }
    }
};  
