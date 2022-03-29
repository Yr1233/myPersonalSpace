<template>
  <div
    class="blog-category-container"
    v-imaLoading="isLoading"
  >
    <h2>文章分类</h2>
    <RightList
      :list="list"
      @ListLoading="handleClick"
    />
  </div>
</template>

<script>

import RightList from "./RightList"
import fetchData from "@/mixins/fetchData"
import { getBlogCategories } from '@/api/blog';

export default {
  mixins: [fetchData([])], // 博客数据为对象，所以这里传递一个{}
  components: {
    RightList
  },
  computed: {
    categoryList() {
      const categoryid = +this.$route.params.categoryid || -1; //所属分类，-1表示全部 
      const categoryLimit = +this.$route.query.limit || 10  //页容量
      return {
        categoryid,
        categoryLimit
      }
    },
    list() {
      const artCount = this.data.reduce((a, b) => a + b.articleCount,
        0)
      const result = [
        { name: '全部', id: -1, articleCount: artCount },
        ...this.data
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryList.categoryid,
        aside: `${it.articleCount}篇`,
      }))
    }
  },
  methods: {
    //获取远程数据
    async fetchData() {
      return await getBlogCategories();
    },
    handleClick(list) {
      const query = {
        page: 1,  // 每次切换分类之后都默认为该分页下的第一页
        limit: this.categoryList.categoryLimit
      }
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (list.id === -1) {
        this.$router.push({ // 命名路由跳转
          name: "Blog", //命名
          query //传过去的数据
        });
      } else {
        this.$router.push({ // 命名路由跳转
          name: "CategoryBlog", //命名
          query,
          params: {
            categoryid: list.id,
          }
        })
      }
    }
  },
}
</script>

<style scoped lang="less">
.blog-category-container {
  height: 100%;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>