export default function (refContainer) {
    return {
        // 生成真实dom之后的mounted周期
        mounted() {
            //监听总线setMainScroll事件
            this.$Bus.$on('setMainScroll', this.handlerSetMainScroll)
            this.$refs[refContainer].addEventListener('scroll', this.handlerScroll)
        },
        // 摧毁之后的destroyed周期
        beforeDestroy() {
            //监听是否销毁组件
            this.$Bus.$emit('mainScroll'); //重新传入一个空的dom
            //注销掉scroll滚动条事件
            this.$refs[refContainer].removeEventListener('scroll', this.handlerScroll)
            //取消监听setMainScroll总线
            this.$Bus.$off('setMainScroll', this.handlerSetMainScroll)
        },
        methods: {
            handlerScroll() {
                //触发mainScroll监听总线
                this.$Bus.$emit('mainScroll', this.$refs[refContainer]);
            },
            handlerSetMainScroll(scrollTop) {
                //将传入容器的top值设置为0
                this.$refs[refContainer].scrollTop = scrollTop;
            }
        },
    }
}