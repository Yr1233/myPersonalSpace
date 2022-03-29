import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import { titleControl } from "@/utils"
import store from "../store";

if (!window.VueRouter) {
	// 没有使用传统的方式引入VueRouter
	Vue.use(VueRouter);
}

const router = new VueRouter({
	//路由配置
	routes,
	//路由模式
	mode: 'history',
	base:process.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
	// 每当导航切换时（包含刷新页面的第一次），该函数会运行
	// from：之前的路由对象  (this.$route)
	// to: 即将进入的路由对象 (this.$route)
	// next: 确认导航的一个函数  调用该函数（无参），就会直接进入to， 调用该函数（传入参数），根据传入参数进入新的导航
	if (to.meta.title) {
		titleControl.setRouterTitle(to.meta.title)
	}
	if (to.meta.auth) { //如果为true 需要鉴权
		const status = store.getters['loginUser/status'];
		//需要鉴权 还需要判断是否已经登录
		if (status === 'loading') { //正在加载登录 还未确定
			next({
				path: '/loading',
				query: {
					returnUrl: to.fullPath //匹配to的路由
				}
			}) //传给Loading要跳转到哪个页面去
		} else if (status === 'Login') { //已登录
			next()
		} else { //未登录

			alert('你还未登录,需要登录才可以继续操作,正在为你跳转!')
			next({
				path: '/login',
				query: {
					returnUrl: to.fullPath //匹配to的路由
				}
			}) //进入登录页 
		}

	} else { //不需要鉴权
		next(); //不需要鉴权 可直接跳转
	}
});

export default router;