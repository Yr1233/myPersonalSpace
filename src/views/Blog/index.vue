<template>
  <Layout>
    <template #default>
      <div class="BlogList">
        <BlogList />
      </div>
      <div class="MessageArea">
      </div>
    </template>
    <template #right>
      <div class="BlogCategory">
        <BlogCategory />
      </div>
    </template>
  </Layout>
</template>

<script>

import BlogList from "./components/BlogList"
import Layout from '@/components/Layout'
import BlogCategory from "./components/BlogCategory"

export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },

}
</script>

<style>
.BlogList,
.BlogCategory {
  width: 100%;
  height: 100%;
}
</style>