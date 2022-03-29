<template>
  <Layout>
    <div
      class="detail-container"
      ref="detail"
      v-imaLoading="isLoading"
    >
      <BlogDetail
        :detail="data"
        v-if="data"
      />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div
        class="toc-container"
        v-imaLoading="isLoading"
      >
        <BlogToc
          :toc="data.toc"
          v-if="data"
        />
      </div>
    </template>
  </Layout>
</template>

<script>

import fetchData from '@/mixins/fetchData'
import { getBlog } from "@/api/blog"
import BlogDetail from "./components/BlogDetail"
import BlogToc from "./components/BlogToc"
import Layout from "@/components/Layout"
import BlogComment from "./components/BlogComment"
import mainScroll from '@/mixins/mainScroll.js';
import { titleControl } from "@/utils"

export default {
  mixins: [fetchData(null), mainScroll('detail')],
  components: {
    BlogDetail,
    BlogToc,
    Layout,
    BlogComment
  },
  methods: {
    async fetchData() {
      let blog = await getBlog(this.$route.params.id);
      if(!blog) {
        this.$router.push('/404');
        return;
      }
      if (blog) {
        titleControl.setRouterTitle(blog.title)
      };
      return blog;
    },
  },
}
</script>

<style lang="less" scoped>
.detail-container {
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;

  .blog-detail-container {
    border-bottom: 1px solid rgba(150, 145, 145, 0.288);
    padding-bottom: 40px;
  }
}
.toc-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>