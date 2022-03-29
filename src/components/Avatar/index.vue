<template>
  <img class="avatar-container" :src="url" :style="{width: size + 'px',height: size + 'px'}" />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //规定url的属性必须为字符串String类型
      rqeuired: true, //属性必传 一定要传入一个属性
    },
    size: {
      size: Number,
      default: 150, // 默认值为 150
    },
  },
}
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
