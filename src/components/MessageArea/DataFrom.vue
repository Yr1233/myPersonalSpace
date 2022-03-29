<template>
  <form
    id="data-form-container"
    ref="form"
    class="data-form-container"
    @submit.prevent="handleSubmit"
  >
    <!-- 取消默认事件 -->
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          placeholder="用户昵称"
          v-model="forData.nickName"
        />
        <span class="tip">{{ forData.nickName.length }}/10</span>
      </div>
      <div class="error">{{ error.nickName }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          type="text"
          maxlength="300"
          placeholder="输入内容"
          v-model="forData.content"
        />
        <span class="tip">{{ forData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmitting">{{isSubmitting ? '提交中' : '提交'}}</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      forData: {
        nickName: '',
        content: ''
      },
      error: {
        nickName: '',
        content: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    handleSubmit() {
      this.error.nickName = this.forData.nickName ? '' : '请输入昵称';
      this.error.content = this.forData.content ? '' : '请输入内容';
      if (this.error.nickName || this.error.content) { //都有错误消息
        return;
      }
      this.isSubmitting = true
      this.$emit('submit', this.forData, (success) => {
        this.forData.nickName = '';
        this.forData.content = '';  
        this.$messageShow({ //messageShow已添加到vue成员中
          content: success,
          type: 'correct',
          duration: 1500,
          container: this.$refs.form,
          callback: () => {
            this.isSubmitting = false;

          }
        })
      })
    }
  },
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  width: 100%;
  overflow: hidden;
  .form-item {
    margin-bottom: 8px;
    .input-area {
      width: 50%;
      position: relative;
    }
    .button-area {
      button {
        background: @primary;
        color: #fff;
        cursor: pointer;
        border: none;
        outline: none;
        width: 100px;
        height: 34px;
        border-radius: 5px;
        font-size: 14px;
        &:hover {
          background: darken(@primary, 10%);
        }
        &:disabled {
          background: lighten(@primary, 20%);
          cursor: not-allowed;
        }
      }
    }
  }
  .tip {
    position: absolute;
    right: 10px;
    bottom: 5px;
    color: #b4b8bc;
    font-size: 12px;
  }

  input,
  textarea {
    display: block;
    padding: 10px 15px;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    font-size: 14px;
    border-radius: 4px;
    &:focus {
      border-color: @primary;
    }
  }
  input {
    padding: 0 15px;
    height: 40px;
  }
  .text-area {
    position: relative;
    textarea {
      resize: none;
      padding: 8px 15px;
      height: 120px;
    }
  }
  .error {
    margin-top: 6px;
    color: @danger;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    padding-left: 12px;
  }
}
</style>