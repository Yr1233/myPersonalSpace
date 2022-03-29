/**
 * @param {String} content 显示的消息内容
 * @param {String} type 弹出消息的类型 (info(正常的消息) error(错误的消息) warn(警告的消息) correct(成功的消息))
 * @param {Number} duration 弹出消息的时间
 * @param {HTMLElement} container 消息的外层容器 消息会在正中间 如果不传为页面中心
 */
import style from "./messageShow.module.less"   /* 导入样式模块 */
import Icon from "@/components/Icon" /* 导入图标组件 */
import getComponentRootDom from "./getComponentRootDom" /* 导入渲染的Dom根元素模块 */

export default function getShow(options = {}) {
    const content = options.content || "";
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;// 如果没传入外层容器的值 就让外层容器为页面中心

    // 创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, { type })  //获取图标Icon 将type值传给Icon(与图标同名)


    //outerHTML 获取元素内的html内容和文本(包括它自身)
    // 容器的position是否改动过类型样式名       
    div.innerHTML = `<span class="${style.icon}">${iconDom.outerHTML}</span><div class="${style.text}">${content}</div>`; //设置样式
    div.className = `${style.message} ${style["message-" + type]}`;

    //外层容器的定位为static默认定位
    if (options.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }
    // 将div加入到容器中
    container.appendChild(div);

    //但获取元素的clientHeight等属性会导致浏览器页面强行渲染
    div.clientHeight; //导致reflow 重绘

    //回归到原来位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%) translateY(0px)`;

    //等待duration时间后消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-20px)`;
        //addEventListener('事件名字', 事件完成后执行的函数, {once} (开启说明只执行一次 ))
        div.addEventListener('transitionend', function () {
            div.remove();
            options.callback && options.callback();
        }, { once: true })
    }, duration);
}