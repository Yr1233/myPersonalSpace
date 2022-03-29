<template>
  <div id="app">
    <Header />
    <Layout>
      <template #left>
        <div
          class="site-aside"
          v-show="user"
        >
          <SiteAside />
        </div>
      </template>
      <template #default>
        <!-- #default可不写 -->
        <RouterView />
      </template>
    </Layout>
    <TopButton />
  </div>
</template>

<script>

import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'
import TopButton from "@/components/TopButton"
import Header from "@/components/Header"
import { mapState } from 'vuex'

export default {
  components: {
    SiteAside,
    Layout,
    TopButton,
    Header
  },
  computed: {
    ...mapState('loginUser', ['user']),
  }
}
</script>

<style lang="less">
@import "~@/styles/mixin.less";
#app {
  width: 100%;
  position: relative;

  .header-container{
    height: 5vh;
  }
  .layout-container {
    height: 95vh;
  }
  .self-fill(fixed);
  img {
    margin: 0 auto;
  }
  .site-aside {
    width: 250px;
    height: 100%;
  }
}
</style>
