<template>
  <div
    class="project-container"
    ref="container"
    v-imaLoading="loading"
  >
    <!-- 热销项目 -->
    <div class="project">
      <div class="title">
        <h3>项目&效果</h3>
        <p>Project & Effect</p>
      </div>

      <div class="list">
        <div
          v-for="item in data"
          :key="item.id"
        >
          <img v-lazy="item.thumb">
          <p>{{ `项目名称:  ${item.name}` }}</p>
          <a :href="item.gitHub">GitHub地址: Yr2331</a>
          <p>{{ `项目介绍:  ${item.description}` }}</p>
        </div>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading" />

    <transition
      name="footer"
      @mouseleave="background= rgba(0, 0, 0, 0);"
    >
      <footer
        id="footer"
        v-if="data && !loading"
      ></footer>
    </transition>
  </div>
</template>

<script>
import Empty from '@/components/Empty';
import { mapState } from "vuex";
import mainScroll from '@/mixins/mainScroll.js';
export default {
  components: {
    Empty
  },
  mixins: [mainScroll('container')],
  computed: {
    ...mapState('project', ['data', 'loading'])
  },
  created() {
    this.$store.dispatch('project/fetchProject');
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  overflow-y: auto;
  height: 100%;
  position: relative;

  .project {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
    color: @gray;
    & p {
      font-weight: bold;
    }
  }
  .list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
      text-align: center;
      margin: 15px 0;
      padding: 20px 10px;
      border: 1px solid @gray;
    }
    div img {
      width: 90%;
      opacity: 0.9;
      cursor: pointer;
      border-radius: 10px;
      transition: 0.3s;
    }
    div img:hover {
      transform: scale(1.1);
      opacity: 1;
    }
    div p {
      margin: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a {
      cursor: pointer;
    }
  }
  #footer {
    width: 100%;
    height: 500px;
    background: url("~@/assets/test.png") no-repeat center / cover;

    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -20px;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      transition: all 1s;
    }
    &:hover::after {
      transition: all 1s;
      background: rgba(0, 0, 0, 0);
    }
  }
}

@media all and (min-width: 768px) {
  .project-container .list {
    width: 720px;
  }
  .project-container .list div {
    width: 46%;
  }
}
@media all and (min-width: 992px) {
  .project-container .list {
    width: 960px;
  }
  .project-container .list div {
    width: 30%;
  }
}
@media all and (min-width: 1200px) {
  .project-container .list {
    width: 1140px;
  }
  .project-container .list div {
    width: 22%;
  }
}
</style>