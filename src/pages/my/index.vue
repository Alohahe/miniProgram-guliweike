<template>
  <view class="container user">
    <!-- 用户头像和昵称 -->
    <view v-if="!userInfo.id" class="userinfo dark-mode">
      <image src="../../static/images/banner1.jpg" class="banner" mode="aspectFill"></image>
      <view class="infobox">
        <image class="avatar" src="../../static/images/atguigu.jpg" mode="scaleToFill" />
        <text class="nickname" @tap="toLogin">{{ '点击登录微课' }}</text>
      </view>
    </view>

    <view v-else class="userinfo dark-mode">
      <image src="../../static/images/banner1.jpg" class="banner" mode="aspectFill"></image>
      <view class="infobox">
        <image class="avatar" :src="userInfo.avatar" mode="scaleToFill" />
        <text class="nickname" @tap="toLogin">{{ userInfo.nickname }}</text>
      </view>
    </view>

    <!-- 我的订单和收藏 -->
    <view class="order-collection">
      <view class="title">我的内容</view>
      <view class="info_list">
        <view class="info_item" v-for="item in firstPanel" :key="item.id">
          <navigator hover-class="none" class="item_a info-link" url="/pages/collect/index">
            <uni-icons :type="item.type" size="24" color="#a1a7b2"></uni-icons>
            <text class="item_dsc">{{ item.title }}</text>
          </navigator>
        </view>
      </view>
    </view>

    <view class="order-collection my-account">
      <view class="title">我的账号</view>
      <view class="info_list">
        <view class="info_item" v-for="item in twoPanel" :key="item.id">
          <navigator hover-class="none" class="item_a info-link" url="/pages/order/index">
            <uni-icons :type="item.type" size="24" color="#a1a7b2"></uni-icons>
            <text class="item_dsc">{{ item.title }}</text>
          </navigator>
        </view>
      </view>
    </view>

    <!-- 退出登录 -->
    <view class="logout dark-mode info-link" @tap="toLogout">退出登陆</view>
  </view>
</template>

<script setup lang="ts">
// 导入 Mock 的数据
import { firstPanel, twoPanel } from '@/mock/my'
import useUserStore from '@/store/userStore'
import { storeToRefs } from 'pinia'

//创建store实例
const userStore = useUserStore()
//解构store实例
const { userInfo } = storeToRefs(userStore)

// 跳转到登录页面
const toLogin = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}

//退出登录
const toLogout = () => {
  //清除本地存储
  uni.clearStorageSync()

  //清除store
  userStore.token = ''
  userStore.userInfo = {}

  //提示
  uni.showToast({
    title:'退出登录成功',
    icon:'loading'
  })
}
</script>

<style scoped lang="scss">
// 头像
.userinfo {
  box-sizing: border-box;

  .banner {
    width: 100%;
    height: 340rpx;
  }

  .infobox {
    display: flex;
    align-items: center;
    padding: 16rpx;
    margin-top: -180rpx;

    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      border: 1px solid #ccc;
      background-color: skyblue;
    }

    .nickname {
      margin-left: 24rpx;
      font-weight: 600;
      color: #333;
    }
  }
}

// 我的内容和账号
.order-collection {
  margin: 28rpx 16rpx 18rpx 16rpx;

  .title {
    font-size: 30rpx;
    padding: 20rpx 0rpx;
    font-weight: bold;
    letter-spacing: 1.2rpx;
  }

  .info_list {
    display: flex;
    // justify-content: space-around;
    padding: 30rpx 0rpx;
    background-color: #fff;
    border-radius: 16rpx;

    .info_item {
      width: 25%;
    }

    .info-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 26rpx;

      .item_dsc {
        margin-top: 16rpx;
      }
    }
  }
}

.my-account {
  margin-top: 0rpx;
}

// 退出登录
.logout {
  height: 52px;
  line-height: 52px;
  text-align: center;
  margin: 28rpx 16rpx 18rpx 16rpx;
  border-radius: 16rpx;
  background-color: #fff;
}
</style>
