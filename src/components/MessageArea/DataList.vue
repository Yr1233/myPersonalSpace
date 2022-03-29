<template>
  <ul class="data-list-container">
    <transition-group
      appear
      name="data-list"
    >

      <li
        v-for="(item,i) in list"
        :key="item.id"
        :style="`transition-delay: ${i/10}s`"
      >
        <Avatar
          :url="item.avatar"
          :size="44"
        />
        <div class="data">
          <div class="nickname">{{ item.nickname }}</div>
          <div class="content">{{ item.content }}</div>
          <div class="time">{{item.createDate}}</div>
        </div>
      </li>
    </transition-group>
  </ul>
</template>

<script>

import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";

export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
  mounted() {
    console.log(this.item)
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  padding-left: 10px;
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
.data-list-enter-active {
  transition: 1s;
}
.data-list-enter {
  opacity: 0;
  transform: translateX(-200px);
}
.data-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>