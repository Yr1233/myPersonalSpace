<template>
  <div
    class="message-container"
    ref="message-container"
  >
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>

import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import * as mapMessage from '@/api/message.js';
import mainScroll from '@/mixins/mainScroll.js';

export default {
  data() {
    return {
      limit: 10,
      page: 1
    }
  },

  mixins: [fetchData({ total: 0, rows: [] }), mainScroll('message-container')],

  components: {
    MessageArea,
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
    async fetchData() {
      return await mapMessage.getMessages(this.page, this.limit);
    },
    async handleSubmit(data, callBack) {
      const result = await mapMessage.postMessage(data);
      this.data.rows.unshift(result); //将数据插入到rows数据最前面
      this.data.total++;
      callBack('感谢你的留言!');
    },
    handleScroll() {
      console.log('滚动条滚动')
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
.message-container {
  width: 100%;
  height: 100%;
  padding: 40px 0;
  box-sizing: border-box;
  overflow-y: auto;
  scroll-behavior: smooth;
  .message-area-container {
    width: 80%;
    margin: 0 auto;
  }
}
</style>