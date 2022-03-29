<template>
  <div id="app">
    <!-- <SiteAside /> -->
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="2000"
      @load="ImageHandle"
    />
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'

export default {
  components: {
    ImageLoader,
  },
  methods: {
    ImageHandle() {
      console.log('load组件完成,图片加载完成')
    }
  }
}
</script>

<style lang="less">
#app {
  width: 500px;
  height: 400px;
  border: 1px solid #000;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
