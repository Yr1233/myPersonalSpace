<template>
  <div class="test-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'
import { getComment, postComment } from "@/api/blog"
import MessageArea from '@/components/MessageArea'

export default {
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea
  },
  created() {
    this.$Bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$Bus.$off('mainScroll', this.handleScroll)
  },
  computed: {
    getLiDomHeight() {
      const height = document.querySelector('.data-list-container li').clientHeight;
      return height;
    },
    hasData() {
      return this.data.rows.length >= this.data.total;
    }
  },
  methods: {
    //获取模拟数据
    async fetchData() {
      return await getComment(this.$route.params.id, this.page, this.limit);
    },
    //post获取模拟数据
    async handleSubmit(forData, callBack) {
      const result = await postComment({
        blogId: this.$route.params.id,
        ...forData
      });
      this.data.rows.unshift(result);
      this.data.total++;
      callBack('评论成功!');
    },
    //获取更多条数据
    async moreData(dom) {
      if (this.hasData || !dom) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const moreData = await this.fetchData();
      this.data.total = moreData.total;
      this.data.rows = this.data.rows.concat(moreData.rows);
      dom.scrollTop = dom.scrollTop - this.getLiDomHeight;
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      if (dom.scrollHeight == Math.ceil(dom.scrollTop) + dom.clientHeight) {
        this.moreData(dom);
      }
    }
  },
}
</script>

<style lang="less" scoped>
.test-container {
  height: 100%;
  .message-area-container {
    padding-top: 40px;
  }
}
</style>