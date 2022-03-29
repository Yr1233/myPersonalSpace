import "nprogress/nprogress.css"
import "nprogress/nprogress.js"
import { start, done, configure } from "nprogress"
import NotFound from "@/views/NotFound.vue"

configure({ /// 配置
	trickleSpeed: 20, // 设置进度条速度
	showSpinner: false //不显示右上角加载图标
})
// 辅助函数
function delay(duration) { //延迟获取数据
	return new Promise((solve) => {
		setTimeout(() => {
			solve()
		}, duration)
	})
};
/**
 * 异步组件辅助函数
 * 因为 getPageComponent 会交给 webpack，改成动态之后，可能依赖关系分析不出来
 * 所以 getPageComponent 参数是传递一个 函数，调用这个函数，得到一个promise，promise完成后得到一个异步组件
 */
function componentLoading(importFun) { //异步延迟获取数据 并导入路径
	return async () => {
		start();
		if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') { //如果是生产环境或者是开发环境 就延迟两秒
			await delay(800)
		}
		const result = await importFun() //异步获取数据
		done();
		return result; //返回数据
	}
}

//导入要配置路由的文件
export default [
	{
		// 当匹配到路径 /时 渲染 Home 组件
		name: 'Home', path: '/', meta: { title: '首页', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Home");
		}),/* webpackChunkName: "home" */
	},
	{
		// 当匹配到路径 /about时 渲染 About 组件
		name: 'About', path: '/about', meta: { title: '关于我', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/About");
		})
	},
	{
		name: 'Blog', path: '/article', meta: { title: '文章', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Blog");
		})
	},
	{
		name: 'CategoryBlog', path: '/article/cate/:categoryid', meta: { title: '文章', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Blog");
		})
	},
	{
		name: 'BlogDetail', path: '/article/:id', meta: { title: '文章详情', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Blog/Detail");
		})
	},
	{
		name: 'Message', path: '/message', meta: { title: '留言板', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Message");
		})
	},
	{
		name: 'Project', path: '/project', meta: { title: '项目&效果', auth: true },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Project");
		})
	},
	{
		name: 'Login', path: "/login", meta: { title: '登录' },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Login");
		})
	},
	{
		name: 'Loading', path: "/loading", meta: { title: '登录中' },
		//webpack的动态import的支持
		component: componentLoading(() => {
			return import("@/views/Loading");
		})
	},
	{
		name: "NotFound",
		path: "*",
		component: NotFound,
	},
]

