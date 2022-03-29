import "./mock";  // 模拟数据 导入数据
//入口文件
import Vue from 'vue';	//导入vue
import App from './App.vue';	//导入主设置App.vue
import './styles/global.less'; //导入全局css样式
import router from "./router"; //导入路由设置
import "./eventBus";
import store from "./store"; //仓库


//远程获取数据
import { messageShow } from "./utils"; // 工具库
Vue.prototype.$messageShow = messageShow;  // 将弹窗注入到Vue实例

//自定义组件(注册全局命令)
import Loading from "./directive/loading";
import Lazy from "./directive/imageLoading";
Vue.directive('imaLoading', Loading);
Vue.directive('lazy', Lazy);

store.dispatch("loginUser/whoAmI");

store.dispatch("setting/fetchSetting");

//new Vue实例
new Vue({
	router, //路由
	store, //v	uex仓库
	render: (h) => h(App),
}).$mount('#app')
