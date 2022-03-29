<template>
  <div id="app">
    <Pager :total="total" :current="current" @changePage="changePage"/> 
  </div>
</template>

<script>

import Pager from '@/components/Pager';

export default {
  name: 'App', //如果在注册组件获取其他情况的时候没有指定名字,则使用该名字
  data() {
     return{
       current : 1,
       total: 302,
     } 
  },
  components: { //局部注册组件
 
    Pager //(total(总数据条数), current(当前页码数))
  },
  methods: {
    changePage(newPage) {
      this.current = newPage;
    }
  }
}
</script>
