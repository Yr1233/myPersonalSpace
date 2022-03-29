<template>
  <div id="app">
    <Avatar
      url="https://img1.baidu.com/it/u=793269991,2224346596&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      :size="150"
    />
  </div>
</template>

<script>
import Avatar from './components/Avatar'

export default {
  name: 'App', //如果在注册组件获取其他情况的时候没有指定名字,则使用该名字

  components: {
    //局部注册组件
    Icon, //(type(图标名))
  },
}
</script>
