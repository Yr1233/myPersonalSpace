<template>
  <div class="blog-detail-container">
    <h1>{{detail.title}}</h1>
    <div class="link">
      <span>日期: {{detail.createDate}}</span>
      <span>浏览: {{detail.scanNumber}}</span>
      <a href="#data-form-container">评论: {{detail.commentNumber}}</a>
      <RouterLink :to="{name: 'CategoryBlog',
            params: {
              categoryid: detail.category.id
            }}">分类: {{detail.category.id}}</RouterLink>
    </div>
    <div
      class="markdown-body"
      v-html="detail.htmlContent"
    >
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css"
import "@/styles/markdown.css"
export default {
  props: {
    detail: {
      type: Object,
      required: true, /* 必传 */
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  width: 100%;
  height: auto;
  .link {
    font-size: 14px;
    color: @gray;
    margin-bottom: 15px;
    a,
    span {
      padding-right: 15px;
    }
  }
}
</style>