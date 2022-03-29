<template>
  <div class="test-container">
    <MessageArea />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
export default {
  components: {
    MessageArea
  }
}
</script>

<style>
.test-container {
  position: relative;
  height: 100px;
}
</style>