<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>

import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  //声明组件的属性
  props: {
    text: {
      //显示的文字
      type: String,
      default: '无数据',
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
  .self-center();
  text-align: center;
  color: @lightWords;
  .icon-container {
    color: @gray;
    font-size: 72px;
  }
}

</style>
