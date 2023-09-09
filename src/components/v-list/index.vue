<template>
  <view class="card-container">
    <view class="card-title">
      <text>{{ title }}</text>
      <navigator v-if="more" class="navigator" :url="link" :open-type="type === 'course' ? 'switchTab' : 'navigate'">
        <text>更多{{ more }}</text>
        <uni-icons class="more" type="right" size="12"></uni-icons>
      </navigator>
    </view>
    <view class="cart-list">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
  defineProps<{
    title: string, // 列表标题
    type: string, // 列表类型
    more: string, // 是否显示更多
    link: string // 点击更多跳转到的地址
  }>()
</script>

<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 100%;

  // 标题
  .card-title {
    margin: 36rpx 12rpx -12rpx 12rpx;
    font-size: 28rpx;
    // font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .navigator {
      font-weight: normal;
      font-size: 24rpx;
      
      .more {
        margin: 0rpx 12rpx;
      }
    }
  }

  // 列表
  .cart-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20rpx 12rpx;
    box-sizing: border-box;
  }
}
</style>