<template>
  <ul class="right-list-container">
    <li
      v-for="(list, i) in list"
      :key="i"
    >
      <!-- 分类 -->
      <span
        :class="{ active:list.isSelect }"
        @click="handleClick(list)"
      >{{list.name}}</span>

      <!-- 数量 -->
      <span
        class="aside"
        :class="{ active:list.isSelect }"
        @click="handleClick(list)"
      >{{list.aside}}</span>

      <!-- 递归 -->
      <RightList
        :list="list.children"
        @ListLoading="handleClick"
      />
    </li>
  </ul>
</template>

<script>

export default {
  name: 'RightList',
  props: {
    // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(list) {
      if (!list.isSelect) {
        this.$emit("ListLoading", list);
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>