<template>
  <view class="container comment">
    <v-comment></v-comment>

    <view class="comment_bar">
      <input
        class="input_box"
        placeholder="请点击输入"
        cursor-spacing="10"
        :adjust-position="false"
        :style="{position: 'relative', bottom:inputHeight +'px'}"
        @confirm="handleComment"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      />
      <uni-icons class="input_icon" :style="{position: 'relative', bottom:inputHeight +'px'}" type="paperplane-filled" size="20" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VComment from '../../../components/v-comment/v-comment.vue'

const inputHeight = ref(0)

const handleComment = () => {}

const handleFocus = (e) => {
  if (e.detail.height) {
    inputHeight.value = e.detail.height //这个高度就是软键盘的高度
  }
}
const handleBlur = () => {
  inputHeight.value = 0 //这个高度就是软键盘的高度
}
const handleInput = () => {}
</script>

<style lang="scss" scoped>
.comment {
  background: white;
  padding: 16px 16px 50px 16px;
  height: 100%;
  position: fixed;
  width: 100%;

  .comment_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 120rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 86.7%, 0) 0,
      hsla(0, 0%, 86.7%, 0.2) 0.42857rem,
      hsla(0, 0%, 86.7%, 0.2) 0.57143rem,
      #fff 0.64286rem,
      #fff
    );

    .input_box {
      width: 80%;
      height: 60rpx;
      line-height: 60rpx;
      background-color: #f2f3f7;
      border-radius: 16rpx;
      padding-left: 20rpx;
      font-size: 28rpx;
    }

    .input_icon {
      margin-left: 20rpx;
    }
  }
}
</style>
