<template>
  <div class="test-container">
    <Layout>
      <!-- 左边组件 -->
      <template #left>
        <p>我是左侧</p>
      </template>

      <!-- 中间组件 -->
      <template>
        <p>我是中间</p>
      </template>

      <!-- 右边组件 -->
      <template #right>
        <p>我是右侧</p>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  width: 400px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid #000;
}
</style>