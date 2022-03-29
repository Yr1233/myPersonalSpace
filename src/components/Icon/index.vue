<template>
  <i
    class="iconfont icon-container"
    :class="changeIcon"
  ></i>
</template>

<script>
var newIcon = {
  close: 'icon-guanbi', //关闭
  WeChat: 'icon-denglu-weixindenglu', //微信
  error: 'icon-cuowu', //错误
  arrowUp: 'icon-xiangshang', //上箭头
  arrowDown: 'icon-xiangxia', //下箭头
  info: 'icon-xinxi', //信息
  warn: 'icon-jinggao', //警告
  blog: 'icon-blog', //博客
  leaveMes: 'icon-liuyan', //留言
  about: 'icon-about', //about
  correct: 'icon-zhengqueshixin', //正确
  code: 'icon-code', //项目
  github: 'icon-github-fill', //github
  qq: 'icon-QQ-circle-fill', //qq
  homepage: 'icon-zhuye', //主页
  email: 'icon-email', //邮箱
  empty: 'icon-empty', //垃圾桶
}

export default {
  //声明组件的属性
  props: {
    type: {
      type: String, //传入的属性为字符串
      required: true, //一定传值
    },
  },

  //计算属性(getting,setting)
  computed: {
    changeIcon() {
      return newIcon[this.type]
    },
  },

  //
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_3170664_f7j3hu8mc9a.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
