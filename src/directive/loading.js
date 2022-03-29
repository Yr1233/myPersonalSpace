import styles from "./loading.module.less"
import loadImage from "../assets/loading.svg";
/**
 * 查询data=loading = img的img标签
 * 得到el中loading效果的img元素
 * 既判断img元素上的 data-role="loading"
 * el.querySelector(select) 如果el下有select这个元素就返回，没有则返回null
 */
function getImageDom() {
    return document.querySelector('img[data-loading=img]')
}
/**
 * 创建img元素，并给img元素添加自定义属性  data-role="loading"，通过这个自定义属性来查找元素
 */
function createImageDom() {
    const img = document.createElement('img');
    img.dataset.loading = 'img';
    img.className = styles.loading;
    img.src = loadImage;
    return img;
}

// 导出指令的配置对象     配置简化
export default function (el, binding) {
    // 根据 binding.value 的值，决定创建或删除img元素  
    const curImg = getImageDom();
    let count = 0;
    let timer = null;
    //如果value为false的话
    if (binding.value) { // 如果el里没有img，则创建img
        //创建image元素
        if (!curImg) {//创建img元素
            const img = createImageDom()
            el.appendChild(img)
            timer = setInterval(() => {
                img.style.transform = `translate(-50%,-50%) rotate(${count++}deg)`
            }, 1000 / 600)
        }

    } else { // el里有img，则删除img
        //不创建image元素
        const curImg = getImageDom();
        clearInterval(timer);
        timer = null;
        if (curImg) {
            curImg.remove();
        }
    }
}