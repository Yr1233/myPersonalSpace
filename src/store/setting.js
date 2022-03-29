import { getSetting } from "@/api/setting";
import { titleControl } from "@/utils";

export default {
    // 开启命名空间
    namespaced: true,  //可以不让这个模块的一些属性和外面的属性混乱(会自动在属性名前面加上)

    state: {    //单一状态树(类似数据data)
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit('setLoading', true);
            const result = await getSetting();
            ctx.commit('setData', result);
            ctx.commit('setLoading', false);
            if (result.favicon) { //创建link 设置页面图标
                const link = document.createElement('link');
                link.setAttribute('rel', 'shortcut icon');
                link.setAttribute('type', 'images/x-icon');
                link.setAttribute('href', result.favicon)
                document.head.appendChild(link)
            }
            if (result.title) { //如果标题加载出来 就设置标题
                titleControl.setStoreTitle(result.title);
            }
        }
    }
}