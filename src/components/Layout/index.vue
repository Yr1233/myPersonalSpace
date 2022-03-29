<template>
  <div class="layout-container">
    <!-- 左侧插槽 -->
    <div class="left">
      <slot name="left"></slot>
    </div>

    <!-- 主容器插槽 -->
    <div class="main">
      <slot></slot>
    </div>

    <!-- 右侧容器插槽 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;

  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>