<template>
  <view class="comment-list">
    <view v-for="item in props.list" :key="item.id" class="comment-item">
      <view class="logo">
        <image :src="item.avatar" />
      </view>
      <view class="content-wrap">
        <view class="name">{{ item.nickname }}</view>
        <view class="date">
          <text>2023-03-21 20:44:02 </text>
          <uni-rate :touchable="false" :value="5" size="12" />
        </view>
        <view class="content">{{ item.content }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { ICommentListItem } from '@/types/comment';

//接收父组件传递数据
const props = withDefaults(defineProps<{
  list:ICommentListItem[]
}>(),{
  list:[] as any
})
</script>

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
