<template>
  <div class="imageloader-container">
    <img
      v-if="!everyThink"
      class="placeholder"
      :src="placeholder"
      alt=""
    />
    <img
      class="origin"
      :src="src"
      @load="ImageHandle"
      alt=""
      :style="{ opacity: changeImage, transition: `${duration}ms`}"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadIma: false, //照片是否加载完成
      everyThink: false //照片是否完全加载完成
    }
  },
  //声明组件的属性
  props: {
    placeholder: {
      //原始图片加载完成前的占位图片
      type: String,
      require: true,
    },
    src: {
      // 原始图片的路径
      type: String,
      require: true,
    },
    duration: {
      //原始图片加载完成后，切换到原始图经过的毫秒数
      type: Number,
      default: 500,
    },
  },
  //执行属性
  computed: {
    changeImage() {
      return this.loadIma ? 1 : 0 //如果图片加载完成 透明度为1 否则为0
    },
  },

  methods: {
    ImageHandle() {
      this.loadIma = true;
      setTimeout(() => {
        this.everyThink = true;
        this.$emit('load');
      }, this.duration)
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.imageloader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .placeholder {
    filter: blur(18px);
  }
  img {
    .self-fill();
    object-fit: cover;
  }
}
</style>
>
