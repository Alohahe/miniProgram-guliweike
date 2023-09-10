<template>
  <view class="container pay-wrap">
    <view class="item">
      <view class="title">订单信息</view>

      <view class="msg">
        <text>课程名称：</text>
        <text>HTML CSS 快速入门</text>
      </view>

      <view class="msg">
        <text>授课老师：</text>
        <text>雷老师</text>
      </view>

      <view class="msg">
        <text>订单编号：</text>
        <text>66987654567890987654</text>
      </view>
    </view>
    <view class="item">
      <view class="title">购买账户</view>
      <view class="msg">
        <text>账户名：</text>
        <text>陈芝豹</text>
      </view>
      <view class="msg">
        <text>联系电话：</text>
        <text>183111111111</text>
      </view>
    </view>
    <view class="item">
      <view class="title">结算</view>
      <view class="msg msg_price">
        <text>订单原价：</text>
        <text class="price">¥ 666</text>
      </view>

      <view class="msg msg_price">
        <text>活动优惠：</text>
        <text class="price">¥ 0</text>
      </view>

      <view class="msg msg_price">
        <text>需支付金额：</text>
        <text class="price">¥ 7777</text>
      </view>

      <view class="check">
        <checkbox-group @change="getAgree">
          <checkbox style="transform: scale(0.7)" />
          <text>同意</text>
        </checkbox-group>
        <navigator class="'link" url=""> 《谷粒微课购买协议》 </navigator>
      </view>
    </view>
    <view class="pay">
      <view class="price">
        <text>实际支付 </text>
        <text>¥6666</text>
      </view>
      <view class="pay-btn" @tap="toPay">去付款</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reqWeixinPay,reqOrderInfo, reqPayStatus } from '@/api/pay';
import type { IOrderInfoRes } from '@/types/pay';
import { onLoad } from '@dcloudio/uni-app';
import type { CheckboxGroupOnChangeEvent } from '@uni-helper/uni-app-types';
import { ref } from 'vue';

//是否同意协议
const isAgree = ref(false)
const getAgree = (e:CheckboxGroupOnChangeEvent)=>{
  isAgree.value = Boolean(e.detail.value[0])
}

const props = defineProps<{
  orderId:string
}>()

const orderInfo = ref<IOrderInfoRes>({} as IOrderInfoRes)

//去付款
const toPay =async ()=>{
  if(!isAgree.value){
    uni.showToast({
      title:'请选择同意协议',
      icon:'none'
    })
    return
  }

  //发起预支付
  const res = await reqWeixinPay(orderInfo.value.item.orderNo)
  if(res.code === 200){
    //发起微信支付
    
  }
}

//微信支付
const weixinPay =async (data:UniNamespace.RequestPaymentOptions)=>{
  //发起支付
  const payRes = await uni.requestPayment(data)

  //判断是否支付成功
  if(payRes.errMsg === 'requestpayment:ok'){
    //查询支付状态
    const payStatus = await reqPayStatus(orderInfo.value.item.orderNo)

    //支付成功，跳转至订单列表
    if(payStatus.code === 200){
      uni.redirectTo({
        url:'/pages/order/index',
        success:(res)=>{
          //提示
          uni.showToast({
            title:'支付成功',
            icon:'success'
          })
        }
      })
    }
  }
}

//获取订单信息
const getOrderInfo=async ()=>{
  const res = await reqOrderInfo(props.orderId)
  orderInfo.value = res.data
}

onLoad(()=>{
  getOrderInfo()
})
</script>

<style lang="scss" scoped>
.pay-wrap {
  min-height: 100vh;
  padding: 16rpx;
}

.item {
  background: #fff;
  margin-bottom: 8px;
  padding: 12px 16px;
  border-radius: 16rpx;

  .title {
    color: #7b8998;
    font-size: 28rpx;
    height: 80rpx;
    line-height: 80rpx;
  }

  .msg {
    font-size: 26rpx;
    color: #7b8998;
    height: 50rpx;
    line-height: 50rpx;

    &.msg_price {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    text {
      color: #072943;

      &.price {
        color: #ff0042;
      }
    }
  }
}

.check {
  color: #7b8998;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-top: 16px;

  .link {
    color: rgb(33, 150, 243);
  }
}

.pay {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 86.7%, 0) 0,
    hsla(0, 0%, 86.7%, 0.2) 0.42857rem,
    hsla(0, 0%, 86.7%, 0.2) 0.57143rem,
    #fff 0.64286rem,
    #fff
  );

  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rpx 30rpx;
  box-sizing: border-box;

  .price {
    font-size: 24rpx;
    color: #7b8998;

    text:first-child {
      color: #444;
      font-size: 26rpx;
    }

    text {
      color: #4db5fb;
      font-size: 18px;
    }
  }

  .pay-btn {
    width: 35%;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
    background: #ff0042;
    border-radius: 40px;
    text-align: center;
    margin-top: 12rpx;
  }
}
</style>
