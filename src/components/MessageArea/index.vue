<template>
  <div class="message-area-container">
    <!-- @submit="handleSubmit" -->
    <DataFrom v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
      <DataList :list="list" :key="list.id"/>
    <div
      class="loading"
      v-imaLoading="isListLoading"
    ></div>
  </div>
</template>

<script>

import DataFrom from "./DataFrom"
import DataList from "./DataList"

export default {
  props: {
    // 列表标题
    title: {
      type: String,
      default: ""
    },
    // 列表副标题
    subTitle: {
      type: String,
      default: ""
    },
    // 列表数据
    list: {
      type: Array,
      default: () => []
    },
    // 列表是否正在加载中
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    DataFrom,
    DataList,
  },
  methods: {
    handleSubmit(forData, callback) {
      this.$emit('submit', forData, callback)
    }
  }
}
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
}

</style>