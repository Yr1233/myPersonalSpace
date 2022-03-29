<template>
  <div
    class="about-container"
    v-imaLoading="loading || !data"
  >
    <iframe
      v-if="data"
      class="iframe-container"
      :src="data"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState('about', ['loading', 'data'])
  },
  created() {
    this.$store.dispatch("about/fetchAbout") //获取到vuex仓库中actions的fetchBanner来获取数据
  },
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .iframe-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>