<template>
  <view class="cart-item">
    <view class="item-image">
      <image class="course" v-if="type === 'course'" src="../../static/images/course.jpg"></image>
      <image class="avatar" v-else src="../../static/images/teacher.jpg"></image>
      <view class="info" v-if="type === 'course'">
        <uni-icons type="staff" size="20" color="#fff"></uni-icons>
        <text class="num">2366677次学习</text>
      </view>
    </view>
    <block v-if="type === 'course'">
      <view class="item-name"> JavaScript 精品课程 </view>
      <view class="item-other">
        <text class="price">
          <text class="icon">￥</text>
          <text>666</text>
        </text>
        <text class="num">1000 人购买</text>
      </view>
    </block>
    <block v-else>
      <view class="item-name">
        具有多年项目开发和教育培训经验，曾在日本野村证券主持开发金融证券项目，对金融数据处理具有丰富的经验。曾为北京积水潭医院主持开发过网络预约，挂号，分诊系统等。对主流框架Spring、Struts2、Hibernate、MyBatis、SpringMVC、SpringBoot、SpringCloud有深入的研究。
      </view>
      <view class="teacher"> 雷老师 </view>
    </block>
  </view>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type: string
  }>(),
  {
    type: 'course'
  }
)
</script>

<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss" scoped>
// 列表每一项
.cart-item {
  width: 49%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10rpx;
  padding-bottom: 20rpx;
  margin-top: 20rpx;
  overflow: hidden;

  // 列表每一项图片
  .item-image {
    position: relative;

    .course {
      width: 100%;
      height: 260rpx;
    }

    .avatar {
      width: 100%;
      height: 400rpx !important;
    }

    .info {
      position: absolute;
      bottom: 12rpx;
      right: 4rpx;
      color: #fff;
      font-size: 24rpx;
      border-radius: 10rpx;
      background-color: rgba(78, 52, 37, 0.2);
      padding: 4rpx 6rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      .num {
        margin-left: 6rpx;
      }
    }
  }

  // 卡片名字
  .item-name {
    height: 61rpx;
    font-size: 26rpx;
    padding: 10rpx;
    color: #737780;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .teacher {
    margin-top: 10rpx;
    padding: 10rpx 10rpx 0rpx 10rpx;
    color: #4db5fb;
    font-size: 26rpx;
  }

  // 其他信息
  .item-other {
    margin-top: 10rpx;
    padding: 10rpx 10rpx 0rpx 10rpx;
    display: flex;
    justify-content: space-between;
    font-size: 26rpx;

    .price {
      color: #4db5fb;
      font-size: 28rpx;

      .icon {
        font-size: 22rpx;
      }
    }
    .num {
      color: #888;
    }
  }
}
</style>
