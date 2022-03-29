<template>
  <div
    class="pager-container"
    v-if="pageChange > 1"
  >
    <a
      @click="handleClick(1)"
      class="iconfont icon-fenye-shouye"
      :class="{disabled: current === 1}"
    ></a><!-- 首页 -->
    <a
      @click="handleClick(current - 1)"
      class="iconfont icon-fenye-shangyiye"
      :class="{disabled: current === 1}"
    ></a><!-- 上一页 -->

    <a
      @click="handleClick(n)"
      v-for="(n, i) in pageNum"
      :key="i"
      :class="{active : n === current}"
    >{{n}}</a><!-- 页数 -->

    <a
      @click="handleClick(current + 1)"
      class="iconfont icon-fenye-xiayiye"
      :class="{disabled: current == maxPage}"
    ></a><!-- 下一页 -->
    <a
      @click="handleClick(pageChange)"
      class="iconfont icon-fenye-weiye"
      :class="{disabled: current == pageChange}"
    ></a><!-- 尾页 -->
  </div>
</template>

<script>
export default {
  //声明组件的属性
  props: {
    current: {
      //当前页码
      type: Number,
      default: 1,
    },
    total: {
      //总数据量
      type: Number,
      default: 0,
    },
    limit: {
      //每页可以容下的页数
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //可见页码数
      type: Number,
      default: 9,
    },
  },
  //计算属性
  computed: {
    //计算出总页数
    pageChange() {
      return Math.ceil(this.total / this.limit)
    },
    //最小页码
    minPage() {
      let minPage = this.current - Math.floor(this.visibleNumber / 2); //当前页数 - (可容页数(9) / 2)
      if (minPage < 1) {//防止最小值越界
        minPage = 1
      }
      return minPage;
    },
    //最大页码
    maxPage() {
      let maxPage = this.minPage + this.visibleNumber - 1; //最小页数 + (可容页数(9) - 1)
      if (maxPage > this.pageChange) {//防止最大值越界
        maxPage = this.pageChange
      }
      return maxPage;
    },
    //pageNum 页数
    pageNum() {
      let pageNum = [] //没行的页数码
      for (let i = this.minPage; i <= this.maxPage; i++) { //最小页数 - 至 - 最大页数
        pageNum.push(i)
      }
      return pageNum;
    },
  },

  //调用方法
  methods: {
    handleClick(newPage) {
      //防止越界
      if (newPage < 1) {
        newPage = 1
      }
      else if (newPage > this.pageChange) {
        newPage = this.pageChange
      }
      else if (newPage === this.current) {
        return;
      }
      // 抛出一个事件 ('取名', 抛出的数据)
      this.$emit('changePage', newPage)
    },
  },
}
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_3170664_myuvd5oavqp.css";
@import "~@/styles/var.less"; //导入公共less代码
.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  a {
    color: @primary;
    font-size: 20px;
    margin: 0 6px;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @danger;
      cursor: text;
      font-size: 24px;
    }
  }
}
</style>
