//网站标题控制
var routeTitle = '', storeTitle = ''

function setTitle() { //设置网站标题
    if (!routeTitle && !storeTitle) {
        document.title = '我的个人空间'
    } else if (routeTitle && !storeTitle) {
        document.title = routeTitle
    } else {
        document.title = `${routeTitle}-${storeTitle}`;
    }
}

export default {
    //两个控制标题的方法
    setRouterTitle(title) {
        routeTitle = title;
        setTitle();
    },
    setStoreTitle(title) {
        storeTitle = title
        setTitle();
    }
}