//vuex仓库
import * as userApi from "@/api/user";

export default {
  state: {
    loading: false, //是否正在登录中
    user: null  //当前登录的用户对象
  },

  // 开启命名空间
  namespaced: true,  //可以不让这个模块的一些属性和外面的属性混乱(会自动在属性名前面加上)

  //更改 Vuex 的 store 中的状态
  mutations: {
    //设置登录状态 
    setLoading(state, payload) { //第一个传入的就是state 第二个传入的是commit传入的第二个参数
      state.loading = payload;
    },
    //设置当前的登录的用户对象的状态
    setUser(state, payload) { //第一个传入的就是state 第二个传入的是commit传入的第二个参数
      state.user = payload;
    }
  },

  //类似于computed(可认为是 store 的计算属性)
  getters: {
    status(state) { //第一个参数为state
      if (state.loading) { //如果loading状态为true
        return 'loading';
      } else if (state.user) { //如果user状态为true
        return 'Login';
      } else { //没有在loading和user状态 说明无登录 
        return 'unLogin';
      }
    }
  },

  //类似mutations 但actions是提交mut.. 并且可以异步处理操作
  actions: {
    //登录
    async login(ctx, payload) {
      ctx.commit('setLoading', true); //登录状态为正在登录中
      const result = await userApi.login(payload.loginId, payload.loginPwd) //等待用户输入 传入账号和密码
      ctx.commit('setUser', result) //将传回的用户信息或null传出
      ctx.commit('setLoading', false); //登录状态为登录或未登录状态
      return result;
    },

    //退出登录
    async loginOut(ctx) {
      ctx.commit('setLoading', true); //登录状态为正在登录中
      await userApi.loginOut() //退出登录
      ctx.commit('setUser', null) //将null作为参数传出(退出登录)
      ctx.commit('setLoading', false); //登录状态为登录或未登录状态
    },

    //如果已登录 重新加载登录信息
    async whoAmI(ctx) {
      ctx.commit('setLoading', true); //登录状态为正在登录中
      const result = await userApi.whoAmI() //重新加载
      ctx.commit('setUser', result) //将传回的用户信息或null传出
      ctx.commit('setLoading', false); //登录状态为登录或未登录状态
      return result;
    }
  }
};
