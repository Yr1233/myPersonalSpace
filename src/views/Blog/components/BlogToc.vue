<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList
      :list="tocSelect"
      @ListLoading="ListLoading"
    />
  </div>
</template>

<script>
import { debounce } from "@/utils"
import RightList from "./RightList"
export default {
  data() {
    return {
      activeAnchor: ''
    }
  },
  components: {
    RightList
  },
  props: {
    toc: {
      type: Array,
      required: true, /* 必传 */
    }
  },
  methods: {
    ListLoading(list) {
      location.hash = list.anchor
    },
    //设置 active为正确的值
    setSelect(scrollDom) {
      if(!scrollDom) {
        return;
      };
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      const rang = 200;
      for (const dom of this.getTocDom) {
        // 判断当前dom元素 是否要为选中状态
        if (!dom) { // 有些情况可能没有dom 没有跳下一个循环
          continue;
        }
        //如果有dom 高度距离顶部200是 为显示区域
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= rang) {
          this.activeAnchor = dom.id
          return;
          //如果为区域下方
        } else if (top > rang) {
          return;
          //如果为区域上方
        } else {
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    }
  },
  created() {
    this.setSelectBounce = debounce(this.setSelect)
    this.$Bus.$on('mainScroll',  this.setSelectBounce);
  },
  destroyed() {
    this.$Bus.$off('mainScroll',  this.setSelectBounce);
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocSelect() {
      const newToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,// 添加isSelect属性 当两个anchor值相等时 为true
          children: newToc(t.children) // 将子元素递归
        }))
      };
      return newToc(this.toc);
    },
    //根据toc得到他们对应的元素数组
    getTocDom() {
      const doms = []
      const getDom = (toc) => {
        for (const dom of toc) { //循环toc 拿取anchor
          doms.push(document.getElementById(dom.anchor)) //利用anchor为id值 取dom元素
          if (dom.children && dom.children.length) { //如果还有子元素 进行递归
            getDom(dom.children);
          }
        }
      }
      getDom(this.toc);
      return doms;
    }
  }
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
  
}
</style>