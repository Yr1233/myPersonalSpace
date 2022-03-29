import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import lazy from "@/assets/lazy.gif"

let imageArr = [];
//挑选出照片
function setImage(img) {
    img.dom.src = lazy;
    const clientHeight = document.documentElement.clientHeight;
    const imgRect = img.dom.getBoundingClientRect();
    const langer = 100
    if (imgRect.top >= -langer && imgRect.top <= clientHeight) {
        img.dom.src = img.src;
        imageArr = imageArr.filter(i => i !== img)
    }
}

//调用改函数 可以选出合适的图片
function setImages() {
    //将每个图片拿出来 分别单独处理
    for (const img of imageArr) {
        setImage(img);
    }
}

function handlerScroll() {
    setImages()
}
//监听mainScroll总线
eventBus.$on('mainScroll', debounce(handlerScroll, 200));

export default {
    inserted(el, binding) {
        const images = {
            dom: el,
            src: binding.value
        };
        imageArr.push(images)
        //立即执行
        setImage(images);
    },
    unbind(el, binding) {
        //筛选出加载完的
        imageArr = imageArr.filter((img) => img.dom !== el);
    },
}