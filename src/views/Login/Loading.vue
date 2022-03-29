<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  created() {
    this.unWatch = this.$watch(() => this.$store.getters['loginUser/status'], (status) => {
      if (status !== 'login') { //如果状态不为登录状态
        this.$router.push(this.$route.query.returnUrl || '/home').catch(() => {});
      }
    }, {
      immediate: true //监听的这个对象会立即输出
    })
  },
  destroyed() {
    this.unWatch; //调用回调就是注销
  },
};
</script>

<style></style>
