//防抖 节流
export default function (fun, duration = 100) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...args);
        }, duration)
    }
}
