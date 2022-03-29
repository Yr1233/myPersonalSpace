<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading...</span>
    <template v-else-if="status === 'Login'">
      <span>
        {{ `${user.name} :`}}
        <RouterLink
          :to="{ name: 'About' }"
          class="router"
        >{{ data ? data.siteTitle : '登录中'}}</RouterLink>
      </span>
      <a
        href=""
        @click.prevent="handleLoginOut"
      >退出</a>
    </template>
    <RouterLink
      v-else
      :to="{ name: 'Login' }"
      exact-path
    >登录</RouterLink>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    /* status() {
     return this.$store.getters['loginUser/status']
   } 等同于下面mapGetters
   */
    ...mapState('loginUser', ['user']), // 取出当前登录用户对象的状态
    ...mapGetters({ status: 'loginUser/status' }),//有命名空间所以不能直接用status
    ...mapState('setting', ['data']),

  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("loginUser/loginOut"); //登出
      this.$router.push("/login");  //登出后跳转到登录页或者首页都可
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.user-name {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4vw;
  color: #ccc;
  z-index: 3;
  .router {
    font-size: 0.8rem;
    color: @primary;
  }
  & a {
    color: @lightWords;
    margin-right: 25px;
    font-size: 14px;
    &:hover {
      color: @warn;
    }
  }
}
</style>
