<template>
  <ul
    class="contact-container"
    :data="dataList"
  >
    <li>
      <!-- github部分 -->
      <a :href="dataList.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ dataList.githubName }}</span>
      </a>
    </li>
    <li>
      <!-- 邮箱部分 -->
      <a :href="dataList.mailSkip">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>{{ dataList.mail }}</span>
      </a>
    </li>

    <li>
      <div class="qq">
        <img :src="dataList.qqQrCode" />
      </div>
      <!-- QQ部分 -->
      <a :href="dataList.qqSkip">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ dataList.qq }}</span>
      </a>
    </li>

    <li>
      <div class="weChat">
        <img
          :src="dataList.weixinQrCode"
        >
      </div>
      <!-- 微信部分 -->
      <a>
        <div class="icon">
          <Icon type="WeChat" />
        </div>
        <span>{{ dataList.weixin }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import '@/styles/global.less'
import Icon from '@/components/Icon'
export default {
  props: {
    dataList: {
      type: Object,
      rqeuired: true, 
    }
  },
  components: {
    Icon,
  },
}
</script>

<style lang="less">
@import "~@/styles/var.less";
.contact-container {
  padding: 0;
  margin: 0;
  list-style: none;
  @liHeight: 30px;

  li {
    color: @lightWords;
    padding: 6px 0;
    height: @liHeight;
    line-height: @liHeight;
    margin-left: 15px;
    position: relative;
    @minBlockSize: 8px;

    &:nth-child(3):hover .qq {
      transform: scaleY(1);
    }
    &:nth-child(4):hover .weChat {
      transform: scaleY(1);
    }
    .qq,
    .weChat {
      position: absolute;
      left: 0;
      padding: 10px 15px 0 15px;
      background: #fff;
      bottom: @liHeight + @minBlockSize;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.4s;
      border-radius: 15px;

      &::after {
        content: "";
        width: @minBlockSize;
        height: @minBlockSize;
        background: #fff;

        position: absolute;
        left: 50%;
        bottom: -@minBlockSize / 2;
        transform: translateX(-50%) rotate(45deg);
      }
      img {
        width: 150px;
        height: 150px;
      }
    }

    a {
      cursor: pointer;
      display: flex;
      align-items: center;

      .icon {
        font-size: 24px;
      }
      span {
        font-size: 10px;
        padding-left: 8px;
      }
    }
  }
}
</style>
