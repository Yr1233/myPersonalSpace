<template>
  <nav class="menu-container">
    <!-- 向to属性传递路由信息对象 RouterLink会根据你传递的信息以及路由配置生成对应的路 -->
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{name : item.name}"
      active-class='active'
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>
<script>
import Icon from '@/components/Icon'
export default {
  data() {
    return {
      items: [
        { name: "Home", title: "首页", icon: "homepage", exact: true },
        { name: "Blog", title: "文章", icon: "blog", exact: false },// 激活状态是否要精确匹配
        { name: "About", title: "关于我", icon: "about", exact: true },
        { name: "Project", title: "项目&效果", icon: "code", exact: true },
        { name: "Message", title: "留言板", icon: "leaveMes", exact: true },
      ],
    }
  },
  components: {
    Icon,
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  list-style: none;
  padding: 0;
  margin: 0;
  color: @gray;
  a {
    display: block;
    display: flex;
    height: 30px;
    line-height: 30px;
    padding-left: 35px;
    cursor: pointer;
    &.active {
      background: darken(@words, 3%);
    }

    span {
      font-size: 18px;
      font-weight: 100;
      margin-left: 15px;
      color: @gray;
    }
  }
  .icon {
    align-content: center;
    color: @lightWords;
    .icon-container {
      font-size: 16px;
    }
  }
  a:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    span {
      color: #fff;
    }
  }
}
</style>
