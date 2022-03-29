<template>
  <div
    v-show="isShow"
    class="top-button-container"
  >
    <button @click="handlerClick">Top</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      scrollHeight: 500
    }
  },
  created() {
    this.$Bus.$on('mainScroll', this.handlerScroll);
  },
  destroyed() {
    this.$Bus.$off('mainScroll', this.handlerScroll);
  },
  methods: {
    handlerScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      //判断是否是要显示到达顶部按钮
      this.isShow = dom.scrollTop >= this.scrollHeight;
    },
    handlerClick(dom) {

      //重新创建一个事件总线
      this.$Bus.$emit('setMainScroll', 0)
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.top-button-container {
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  z-index: 99999;

  button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    font-size: 18px;
    position: fixed;
    background: @primary;
    opacity: 0.7;
    border-radius: 50%;
    color: #fff;
    border: none;
    &:hover {
      opacity: 1;
      transition: 0.5s;
    }
  }
}
</style>