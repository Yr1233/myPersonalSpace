<template>
  <div
    class="siteaside-container"
  >
    <Avatar
      v-if="data"
      :url="data.avatar"
      :size="150"
    />
    <h1
      class="siteName"
      v-if="data"
    >{{ '' || data.siteTitle }}</h1>
    <Menu />
    <Contact
      v-if="data"
      :dataList='data'
    />
    <span
      class="text"
      v-if="data"
    >{{ data.siteTitle }}</span>
  </div>
</template>

<script>

import Contact from './Contact'
import Menu from './Menu'
import Avatar from '@/components/Avatar'
import { mapState } from 'vuex'

export default {
  components: {
    Contact,
    Menu,
    Avatar,
  },
  computed: {
    ...mapState('setting', ['data']),
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.siteaside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 0;
  box-sizing: border-box;

  img {
    margin: 0 auto;
  }
  .siteName {
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    font-size: 1.2rem;
    color: rgb(184, 184, 184);
  }
  .menu-container {
    margin-top: 20px;
  }
  .text {
    margin-top: 30px;
    display: block;
    text-align: center;
    font-size: 12px;
  }
  .contact-container {
    margin-top: 30px;
  }
}
</style>
