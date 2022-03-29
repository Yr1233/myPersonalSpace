/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
import Vue from 'vue';
const app = new Vue({});
Vue.prototype.$Bus = app; //事件总线

export default app;

//等同下面
/* let eventBus = {};
export default {
    // 监听总线
    $on(eventName, handler) { // 事件名字 函数
        if (!eventBus[eventName]) { // 如果总线里没有事件
            eventBus[eventName] = new Set(); //初始化数组 并去重
        };
        eventBus[eventName].add(handler);
    },
    //取消监听
    $off(eventName, handler) {
        if (!eventBus[eventName]) { // 如果总线里面已经没有事件
            return; //返回
        }
        // 有的话 就删除
        eventBus[eventName].delete(handler);
    },
    //触发事件
    $emit(eventName, ...args) {
        if (!eventBus[eventName]) { // 如果总线里面已经没有事件 就不执行事件
            return; //返回
        }
        //有的话 执行当前线的所有时间
        for (const handler of eventBus[eventName]) {
            handler(...args);
        }
    }
}
*/
