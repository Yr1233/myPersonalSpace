<template>
  <div class="loading-container">
    <div
      class="loading"
      v-imaLoading="loading"
    ></div>
    <h1 class="title">正在登录中...</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('loginUser', ['loading'])
  },
  created() {
    this.unWatch = this.$watch(() => this.$store.getters['loginUser/status'], (status) => {
      if (status !== 'login') { //如果状态不为登录状态
        this.$router.push(this.$route.query.returnUrl || '/home').catch(() => { });
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

<style lang="less" scoped>
.loading-container {
  width: 100%;
  height: 100%;
  .title {
    display: block;
    text-align: center;
  }
}
</style>
