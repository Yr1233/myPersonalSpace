const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin; //生成代码分析报告，帮助提升代码质量和网站性能

if (process.env.NODE_ENV === "production") { //如果为生产环境
    // 为生产环境修改配置...
    module.exports = {
        devtool: "none",
        plugins: [new BundleAnalyzerPlugin()],//生产环境不生成代码分析报告
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
        }
    };
} else {
    module.exports = {};
}
