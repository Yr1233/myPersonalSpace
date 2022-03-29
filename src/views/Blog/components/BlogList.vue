<template>
  <div
    class="blog-list-container"
    v-imaLoading="isLoading"
    ref="container"
  >
    <ul v-if="data.rows">
      <li
        v-for="blog in data.rows"
        :key="blog.id"
      >
        <div
          class="left"
          v-if="blog.thumb"
        >
          <RouterLink :to="{name: 'BlogDetail',
                         params: {
                         id: blog.id
                         }}">
            <img
              v-lazy="blog.thumb"
              :title="blog.title"
              :alt="blog.title"
            >
          </RouterLink>
        </div>
        <div class="right">
          <RouterLink :to="{name: 'BlogDetail',
                         params: {
                         id: blog.id
                         }}">
            <h2>{{blog.title}}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期: {{blog.createDate}}</span>
            <span>浏览: {{blog.scanNumber}}</span>
            <span>评论: {{blog.commentNumber}}</span>
            <!-- 分类 -->
            <RouterLink :to="{name: 'CategoryBlog',
                           params: {
                           categoryid: blog.category.id
                           }}">分类: {{blog.category.name}}</RouterLink>
          </div>
          <div class="desc">
            <span>{{blog.description}}</span>
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="!data.rows && !isLoading" />
    <!-- 分页 -->
    <Pager
      v-if="data.total"
      :total="data.total"
      :current="routerInfo.page"
      :limit="routerInfo.limit"
      @changePage="changePage"
    />
  </div>
</template>

<script>

import { getBlogs } from '@/api/blog.js';
import Pager from '@/components/Pager';
import fetchData from "@/mixins/fetchData.js"
import mainScroll from '@/mixins/mainScroll.js';
import Empty from '@/components/Empty';


export default {
  mixins: [fetchData({}), mainScroll('container')], // 博客数据为对象，所以这里传递一个{}
  components: {
    Pager,
    Empty
  },

  //计算属性
  computed: {
    //路由信息
    routerInfo() { // 获取路由信息
      //+号是为了将传过来的字符串转换为数字
      const categoryid = +this.$route.params.categoryid || -1; //所属分类，-1表示全部 
      const page = +this.$route.query.page || 1; //当前页码
      const limit = +this.$route.query.limit || 10;  //页容量 
      return {
        categoryid,
        page,
        limit
      }
    }
  },
  methods: {
    changePage(newPage) { //当点击时候返回新的页数
      if (newPage !== this.routerInfo.page) {
        const query = {
          page: newPage,
          limit: this.routerInfo.limit
        }
        // 跳转到 当前分类id 当前页容量 newPage的页码(当前页码)
        if (this.$route.categoryid === -1) {
          //没有分类  链接地址为 /article?page=${newPage}&limit=${this.routerInfo.limit}
          this.$router.push({ // 命名路由跳转
            name: "Blog", //命名
            query //传过去的数据
          })
        } else {
          // ${this.routerInfo.categoryid}(所属分类 -1表示全部)

          // 有分类  链接地址应该为 /article/${this.routerInfo.categoryid}?page=${newPage}&limit=${this.routerInfo.limit}
          this.$router.push({ // 命名路由跳转
            name: "CategoryBlog", //命名
            query,
            params: {
              categoryid: this.routerInfo.categoryid //相比上面没有分类 多了个分类 所以需要多传入一个所属分类
            }
          })
        }
      }
    },

    // formatDate不是组件内部方法不能直接在模版里使用，先向组件注入自己定义的工具方法
    async fetchData() {
      return await getBlogs(this.routerInfo.page, this.routerInfo.limit, this.routerInfo.categoryid);
    },
  },
  watch: {
    async $route() {
      this.isLoading = true
      //滚动条到最顶
      this.$refs.container.scrollTop = 0; // 点击分页 滚动高度为0
      this.data = await this.fetchData()
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .left {
        flex: 0 0 auto;
        margin-right: 15px;

        img {
          display: block;
          max-width: 200px;
          max-height: 150px;
          border-radius: 5px;
        }
      }
      .right {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
        .aside {
          font-size: 12px;
          color: @gray;
          span {
            margin-right: 15px;
          }
        }
        .desc {
          margin: 15px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>