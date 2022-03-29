<template>
  <div class="header-container">
    <header>
      <div class="logo">
        <img
          src="~@/assets/Personal-space-icon.png"
          alt="我的个人空间"
        >
        <a
          href="/"
          class="span"
        >
          <span>个</span>
          <span>人</span>
          <span>空</span>
          <span>间</span>
        </a>
      </div>
      <UserName />
    </header>
  </div>
</template>

<script>
import UserName from "@/components/UserName";
export default {
  components: {
    UserName,
  },
};
</script>

<style lang="less" scoped>
.header-container {
  position: relative;
  width: 100%;
  display: flex;

  header {
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #202020, rgb(22, 22, 22));
    box-sizing: border-box;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: url("~@/assets/bg.png") repeat center center;
      opacity: 0.6;
      z-index: 1;
    }
    .logo {
      padding-left: 1rem;
      display: flex;
      height: 100%;
      position: absolute;
      align-items: center;
      color: #ccc;
      z-index: 2;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      .span {
        display: flex;
        padding-left: 1rem;

        span {
          font-size: 1.2rem;
          padding: 0 0.5rem;
          font-weight: bolder;
          text-shadow: 4px 2px 6px #ccc;
          animation: jumping 1s infinite alternate;
        }
        & span:nth-of-type(1) {
          animation-delay: 0s;
        }
        & span:nth-of-type(2) {
          animation-delay: 0.2s;
        }
        & span:nth-of-type(3) {
          animation-delay: 0.4s;
        }
        & span:nth-of-type(4) {
          animation-delay: 0.6s;
        }
        &:hover {
          color: #ccc;
        }
      }
    }

    @keyframes jumping {
      0% {
        transform: translateY(0);
        text-shadow: 4px 2px 6px #ccc;
      }
      50% {
        transform: translateY(-8px);
        text-shadow: 4px 6px 6px #ccc;
      }
    }
  }
}
</style>