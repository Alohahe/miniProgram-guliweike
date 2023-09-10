<template>
  <view class="container login_container">
    <view class="logo-container">
      <image class="logo" src="../../static/images/login.png"></image>
      <text class="info">让天下没有难学的技术</text>
    </view>

    <view class="wx-login">
      <view class="login-content">
        <uni-icons type="weixin" size="28" color="#fff"></uni-icons>
        <text class="login" @tap="toLogin">微信登陆</text>
      </view>
    </view>

    <!-- <view class="other-login">
      <view>其他登录方式</view>
      <view class="icon">
        <uni-icons class="my-icon phone-icon" type="qq" size="26"></uni-icons>
        <uni-icons class="my-icon" type="phone" size="26"></uni-icons>
      </view>
    </view> -->

    <!-- <view class="login_footer">
      <view :class="['login_check_icon', 'checked']"></view>
      
      <view class="login_block">
        我已阅读并同意
        <navigator class="link">用户协议</navigator>
        和
        <navigator class="link">隐私声明</navigator>
      </view>
    </view> -->
  </view>
</template>

<script setup lang="ts">
import { reqLogin,reqUserInfo } from '@/api/login'
import useUserStore from '@/store/userStore'
import { storeToRefs } from 'pinia';

//实例化useUserStore
const userStore = useUserStore()
//解构userStore中的值
const {token,userInfo} = storeToRefs(userStore)

const toLogin = () => {
  //获取登录临时code
  uni.login({
    success:async (res)=>{
      // console.log(res)
      const {code} = res
      //用临时code发送登录请求，获取token
      const {data} = await reqLogin(code)
      //将token存入本地
      uni.setStorageSync('token',data.token)
      //将token存入store
      userStore.setToken(data.token)

      //获取用户信息
      getUserInfo()

      //跳转至首页
      uni.reLaunch({
        url: '/pages/home/index'
      });
    }
  })
}

//获取用户信息
const getUserInfo = async ()=>{
  const res = await reqUserInfo()
  // console.log(res)

  //将用户信息存储到本地
  uni.setStorageSync('userInfo',res.data.item)
  //将用户信息存储到store
  userStore.setUserInfo(res.data.item)
}
</script>

<style lang="scss" scoped>
.login_container {
  display: flex;
  flex-direction: column;
  padding-top: 360rpx;
  height: 100vh;
  box-sizing: border-box;
}

// 公司信息
.logo-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  .logo {
    width: 360rpx;
    height: 100rpx;
  }

  .info {
    margin-top: 50rpx;
    font-size: 26rpx;
    color: #333;
    letter-spacing: 0.2rpx;
  }
}

.wx-login {
  position: fixed;
  bottom: 300rpx;
  width: 100%;
  padding: 0rpx 80rpx;
  box-sizing: border-box;

  .login {
    margin-left: 10rpx;
  }
}

.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4db5fb;
  border-radius: 100rpx;
  color: #fff;
  padding: 20rpx 0rpx;
}

// 其他登录方式
// .other-login {
//   text-align: center;
//   font-size: 28rpx;
//   color: #333;
//   margin-top: 100rpx;

//   .icon {
//     margin-top: 30rpx;

//     .my-icon {
//       margin-left: 70rpx !important;
//     }

//     .phone-icon {
//       margin-left: 0rpx !important;
//     }
//   }
// }

// .login_footer {
//   position: fixed;
//   bottom: 140rpx;
//   width: 100%;
//   text-align: center;

//   .link {
//     color: #4db5fb;
//   }
// }
</style>
