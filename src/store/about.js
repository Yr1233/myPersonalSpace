import { getAbout } from "../api/about";

export default {
    state: { //单一状态树(类似数据data)
        data: [],
        loading: false
    },
    // 开启命名空间
    namespaced: true,  //可以不让这个模块的一些属性和外面的属性混乱(会自动在属性名前面加上)
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
    },
    actions: {
        async fetchAbout(ctx) {
            ctx.commit('setLoading', true);
            const result = await getAbout();
            ctx.commit('setData', result);
            ctx.commit('setLoading', false);
        },
    }
}