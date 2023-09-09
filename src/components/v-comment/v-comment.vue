<template>
  <view class="comment-list">
    <view v-for="item in 3" :key="item" class="comment-item">
      <view class="logo">
        <image src="../../static/images/course.jpg" />
      </view>
      <view class="content-wrap">
        <view class="name">老张</view>
        <view class="date">
          <text>2023-03-21 20:44:02 </text>
          <uni-rate :touchable="false" :value="5" size="12" />
        </view>
        <view class="content">我是谁？我从哪来？</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.comment-list {
  .comment-item {
    display: flex;
    padding: 30rpx 0;
    border-bottom: 1px solid #ececec;

    .logo {
      border-radius: 50%;
      width: 64rpx;
      height: 64rpx;
      margin-right: 16rpx;

      image {
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }
    }

    .content-wrap {
      font-size: 24rpx;
      color: #000;
      flex: 1;

      .date {
        color: #a1a5b2;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .content {
        margin-top: 8px;
      }
    }
  }
}
</style>
