/**
 *** 获取某个组件渲染的Dom根元素
 */
import Vue from 'vue'
export default function (comp, props) {
	const vm = new Vue({
		render: (h) => h(comp, { props }),
	})
	vm.$mount() //挂载在vue上
	return vm.$el //提取出el的值
}
