import Vuex from "vuex"; //store 仓库 install 类似Vue.use
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import loginUser from "./loginUser";
import project from "./project"

if (!window.Vuex) {
    // 没有使用传统的方式引入Vuex
    Vue.use(Vuex);
}

export default new Vuex.Store({
    modules: {
        banner, //banner配置
        setting, //全局设置
        about, //关于我
        loginUser, //登录界面
        project, //项目效果
    },
    strict: true, //严格模式 
});;

