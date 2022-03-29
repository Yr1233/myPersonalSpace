<template>
  <div
    class="home-container"
    ref="container"
    v-imaLoading="loading"
    @wheel="handleWheel"
  >
    <ul
      class="ul-container"
      :style="{marginTop}"
      @transitionend="handleTransitionEnd"
    >
      <li
        v-for="(item) in data"
        :key="item.id"
      >
        <Carouselitem :banner="item" />
      </li>
    </ul>

    <div
      @click="changeIndex(index - 1)"
      v-show="index >= 1"
      class="arrow arrowUp"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      @click="changeIndex(index + 1)"
      v-show="index < (data.length - 1)"
      class="arrow arrowDown"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        @click="changeIndex(i)"
        :class="{active: index === i}"
      ></li>
    </ul>
  </div>
</template>

<script>

import Carouselitem from "./Carouselitem"
import Icon from '@/components/Icon'
import { mapState } from "vuex"

export default {
  /* 注册组件 */
  components: {
    Carouselitem,
    Icon
  },
  data() {
    return {
      containerHeight: 0, /* 容器的高度 */
      index: 0, /* 当前照片的索引 */
      switching: false  /* 是否有鼠标事件正在触发 */
    }
  },

  methods: {
    changeIndex(index) {
      this.index = index;
    },
    //鼠标滚轮事件
    handleWheel(e) {
      //如果已经有滚轮事件 就不触发
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        //向上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        //向下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
  },
  created() {
    this.$store.dispatch("banner/fetchBanner") //获取到vuex仓库中actions的fetchBanner来获取数据
  },
  /* 计算属性 */
  computed: {
    //移动照片
    marginTop() {
      return this.index * -this.containerHeight + 'px';
    },
    ...mapState('banner', ['loading', 'data']), //将vuex仓库里的state的loading和data数据拿过来
  },

  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@paddingArrow: 20px; //上下箭头距页面上下边距
@height: 6px; //动画的上下摆动高度
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.541);

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  //轮播图
  .ul-container {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 400ms linear;
    li {
      width: 100%;
      height: 100%;
    }
  }

  //上下箭头 / 右侧跳转按钮
  .arrow {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    font-size: 24px;
    color: @lightWords;
    cursor: pointer;
  }
  //上按钮
  .arrowUp {
    top: @paddingArrow;
    animation: Up 2s infinite;
  }
  //下按钮
  .arrowDown {
    bottom: @paddingArrow;
    animation: Down 2s infinite;
  }

  /* 向上箭头的动画函数 */
  @keyframes Up {
    0% {
      transform: translateX(50%) translateY(@height);
    }
    50% {
      transform: translateX(50%) translateY(-@height);
    }
    100% {
      transform: translateX(50%) translateY(@height);
    }
  }

  /* 向下箭头的动画函数 */
  @keyframes Down {
    0% {
      transform: translateX(50%) translateY(-@height);
    }
    50% {
      transform: translateX(50%) translateY(@height);
    }
    100% {
      transform: translateX(50%) translateY(-@height);
    }
  }

  //右侧跳转按钮
  .indicator {
    position: absolute;
    right: @paddingArrow;
    top: 50%;
    transform: translateY(-50%);

    li {
      height: 6px;
      width: 6px;
      border: 2px solid #fff;
      cursor: pointer;
      margin: 10px 0;
      border-radius: 50%;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>