<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  components: {
    Header
  },
}
</script>

<style lang="less">
@import "~@/styles/global.less";
#app {
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}
</style>
