<template>
  <div
    class="Carouselitem-container"
    ref="containerSize"
    @mousemove="mouseMove"
    @mouseleave="imageCenter"
  >
    <div
      class="image-container"
      :style="ImageMove"
      ref="imageSize"
    >
      <ImageLoader
        :src="banner.bigImg"
        :placeholder="banner.midImg"
        :duration="3000"
        @load="this.getDom"
      />
      <div
        class="title"
        ref="title"
      >{{banner.title}}</div>
      <div
        class="description"
        ref="description"
      >{{banner.description}}</div>
    </div>
  </div>
</template>

<script>

import ImageLoader from '@/components/ImageLoader';

export default {
  props: ["banner"],

  data() {
    return {
      titleWidth: 0, //title的宽度
      descriptionWidth: 0, //desc的宽度
      imageSize: 0, //照片的大小
      containerSize: 0,  //容器的大小
      mouseX: 0, //鼠标X轴位置
      mouseY: 0, //鼠标Y轴位置
      left: 0,
      top: 0
    }
  },
  components: {
    ImageLoader
  },

  computed: {
    ImageMove() {
      const moveWidth = this.imageSize.width - this.containerSize.width;
      const moveHeight = this.imageSize.height - this.containerSize.height;

      this.left = moveWidth / -this.containerSize.width * this.mouseX;
      this.top = moveHeight / -this.containerSize.height * this.mouseY;

      return {
        transform: `translate(${this.left}px, ${this.top}px)`
      }
    },
  },
  mounted() {
    //title和description的宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;

    //获取照片和容器的大小
    this.setSize()
    this.imageCenter()
    //元素的大小发生变化时 再次获取照片和容器的大小
    window.addEventListener("resize", this.setSize)
  },
  //但销毁时 移除resize
  destroyed() {
    window.removeEventListener('resize', this.setSize);
  },
  methods: {
    // 调用该方法，显示文字
    getDom() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 描述也是一样
      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.description.clientWidth; // reflow
      this.$refs.description.style.transition = "2s 1s";
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },

    //获取照片和容器的大小
    setSize() {
      //照片的大小
      this.imageSize = {
        width: this.$refs.imageSize.clientWidth, //宽
        height: this.$refs.imageSize.clientHeight  //高
      }

      //容器的大小
      this.containerSize = {
        width: this.$refs.containerSize.clientWidth, //宽
        height: this.$refs.containerSize.clientHeight  //高
      }
    },
    //当鼠标进入移动时
    mouseMove(e) {
      //获取容器的的大小及其相对于视口的位置
      //拥有left top right bottom x y width heigh值
      const rect = this.$refs.containerSize.getBoundingClientRect();  //方法返回元素的大小及其相对于视口的位置

      //获取鼠标距离父级的x y
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    imageCenter() {
      this.mouseX = this.containerSize.width / 2;
      this.mouseY = this.containerSize.height / 2;
    }
  },
}
</script>

<style lang="less" scoped>
.Carouselitem-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .image-container {
    width: 110%;
    height: 110%;
    position: relative;
    transition: 0.2s linear;
  }
  .title,
  .description {
    position: fixed;
    top: 50%;
    left: 140px;
    line-height: 30px;
    color: rgb(168, 167, 167);
    transform: translateY(15px);
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    opacity: 0;
  }
  .title {
    font-size: 2em;
  }
  .description {
    font-size: 1.2em;
    margin-top: 40px;
    color: lighten(#ccc, 20%);
  }
}
</style> 