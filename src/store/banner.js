import { getBanners } from "../api/banner";

export default {
    state: { //单一状态树(类似数据data)
        loading: false,
        data: [],
        settingData: []
    },
    // 开启命名空间
    namespaced: true,  //可以不让这个模块的一些属性和外面的属性混乱(会自动在属性名前面加上)
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchBanner(ctx) {
            if (ctx.state.data.length) {
                return
            }
            ctx.commit('setLoading', true);
            const result = await getBanners();
            ctx.commit('setData', result);
            ctx.commit('setLoading', false);
        },
    }
}