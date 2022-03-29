<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit">
      <h1 class="title">登录</h1>
      <div class="form-item">
        <label>账号: </label>
        <input
          type="text"
          v-model="loginId"
        />
      </div>
      <div class="form-item">
        <label>密码: </label>
        <input
          type="password"
          autocomplete="new-password"
          v-model="loginPwd"
        />
      </div>
      <div class="form-item">
        <label></label>
        <button :disabled="loading">
          {{ loading ? "loading..." : "登录" }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loginId: '',
      loginPwd: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loginUser.loading
    }),
  },
  methods: {
    async handleSubmit(data) {
      const login = await this.$store.dispatch('loginUser/login', {
        loginId: this.loginId,
        loginPwd: this.loginPwd
      });
      if (login) {
        const path = this.$route.query.returnUrl || '/'
        this.$router.push(path)
      } else {
        alert('账号或密码错误请重新输入')
      }
    }
  },
  async created() {
    const login = await this.$store.dispatch('loginUser/login', {
      loginId: this.loginId,
      loginPwd: this.loginPwd
    });
    if (login) {
      const path = this.$route.query.returnUrl || '/'
      this.$router.push(path)
    }
  }
};
</script>
<style lang='less' scoped>
@import "~@/styles/mixin.less";
.login-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  .title {
    margin: 0 auto;
    text-align: center;
    margin: 40px 0;
    margin-left: 50px;
  }
  .form-item {
    margin: 1em auto;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    & input {
      height: 26px;
      font-size: 14px;
      flex: 1 1 auto;
    }
    & label {
      width: 70px;
    }
    & button {
      flex: 1 1 auto;
      background: #50936c;
      border: none;
      outline: none;
      color: #fff;
      border-radius: 5px;
      height: 35px;
      font-size: 16px;
    }
  }
}
</style>
