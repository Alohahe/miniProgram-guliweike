<!--
此文件为开发者工具生成，生成时间: 2023/9/10上午11:01:55
使用方法：
在 D:\前端230315\课程内容\小程序\uniapp\weike-dev-01\dist\dev\mp-weixin\pages\home\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\前端230315\课程内容\小程序\uniapp\weike-dev-01\dist\dev\mp-weixin\pages\home\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="container home-container data-v-2c5296db">
      <view class="swiper_box data-v-2c5296db">
        <swiper autoplay="false" circular="true" class="swiper data-v-2c5296db" duration="500" indicator-active-color="#26B7FF" indicator-color="#fff" interval="2000" current="0"></swiper>
        <view class="indicator data-v-2c5296db">
          <text class="circle data-v-2c5296db"></text>
          <text class="circle data-v-2c5296db active"></text>
        </view>
      </view>
      <view class="card-container data-v-2c5296db">
        <view class="hot_cate data-v-2c5296db">
          <view class="hot_cate_item data-v-2c5296db">
            <navigator class="hot_cate_item_a data-v-2c5296db">
              <image class="hot_cate_item_img data-v-2c5296db sk-image"></image>
              <text class="hot_cate_item_name data-v-2c5296db sk-transparent sk-text-14-2857-641 sk-text">前端开发</text>
            </navigator>
          </view>
          <view class="hot_cate_item data-v-2c5296db">
            <navigator class="hot_cate_item_a data-v-2c5296db">
              <image class="hot_cate_item_img data-v-2c5296db sk-image"></image>
              <text class="hot_cate_item_name data-v-2c5296db sk-transparent sk-text-14-2857-563 sk-text">前端开发</text>
            </navigator>
          </view>
          <view class="hot_cate_item data-v-2c5296db">
            <navigator class="hot_cate_item_a data-v-2c5296db">
              <image class="hot_cate_item_img data-v-2c5296db sk-image"></image>
              <text class="hot_cate_item_name data-v-2c5296db sk-transparent sk-text-14-2857-255 sk-text">前端开发</text>
            </navigator>
          </view>
          <view class="hot_cate_item data-v-2c5296db">
            <navigator class="hot_cate_item_a data-v-2c5296db">
              <image class="hot_cate_item_img data-v-2c5296db sk-image"></image>
              <text class="hot_cate_item_name data-v-2c5296db sk-transparent sk-text-14-2857-720 sk-text">前端开发</text>
            </navigator>
          </view>
          <view class="hot_cate_item data-v-2c5296db">
            <navigator class="hot_cate_item_a data-v-2c5296db">
              <image class="hot_cate_item_img data-v-2c5296db sk-image"></image>
              <text class="hot_cate_item_name data-v-2c5296db sk-transparent sk-text-14-2857-838 sk-text">前端开发</text>
            </navigator>
          </view>
        </view>
      </view>
      <view class="card-container list-index--card-container data-v-c5adc472 list-index--data-v-c5adc472">
        <view class="card-title list-index--card-title data-v-c5adc472 list-index--data-v-c5adc472">
          <text class="data-v-c5adc472 list-index--data-v-c5adc472 sk-transparent sk-text-14-2857-418 sk-text">热门课程</text>
          <navigator class="navigator list-index--navigator data-v-c5adc472 list-index--data-v-c5adc472" open-type="switchTab">
            <text class="data-v-c5adc472 list-index--data-v-c5adc472 sk-transparent sk-text-14-2857-477 sk-text">更多课程</text>
            <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons" class="more list-index--more data-v-c5adc472 list-index--data-v-c5adc472">
              <text class="uni-icons icons--uni-icons uniui-right icons--uniui-right sk-pseudo sk-pseudo-circle" style="color:#333333;font-size:12px"></text>
            </view>
          </navigator>
        </view>
        <view class="cart-list list-index--cart-list data-v-c5adc472 list-index--data-v-c5adc472">
          <view class="cart-item index--cart-item data-v-1bb6908a index--data-v-1bb6908a">
            <view class="item-image index--item-image data-v-1bb6908a index--data-v-1bb6908a">
              <image class="course index--course data-v-1bb6908a index--data-v-1bb6908a sk-image"></image>
              <view class="info index--info data-v-1bb6908a index--data-v-1bb6908a">
                <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons" class="data-v-1bb6908a index--data-v-1bb6908a">
                  <text class="uni-icons icons--uni-icons uniui-staff icons--uniui-staff sk-pseudo sk-pseudo-circle" style="color:#fff;font-size:20px"></text>
                </view>
                <text class="num index--num data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-846 sk-text">99557次学习</text>
              </view>
            </view>
            <view class="item-name index--item-name data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-973 sk-text">Zepto快速精通</view>
            <view class="item-other index--item-other data-v-1bb6908a index--data-v-1bb6908a">
              <text class="price index--price data-v-1bb6908a index--data-v-1bb6908a"><text class="icon index--icon data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-opacity">￥</text>
              <text class="data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-7 sk-text">22800</text></text>
              <text class="num index--num data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-447 sk-text">6791 人购买</text>
            </view>
          </view>
          <view class="cart-item index--cart-item data-v-1bb6908a index--data-v-1bb6908a">
            <view class="item-image index--item-image data-v-1bb6908a index--data-v-1bb6908a">
              <image class="course index--course data-v-1bb6908a index--data-v-1bb6908a sk-image"></image>
              <view class="info index--info data-v-1bb6908a index--data-v-1bb6908a">
                <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons" class="data-v-1bb6908a index--data-v-1bb6908a">
                  <text class="uni-icons icons--uni-icons uniui-staff icons--uniui-staff sk-pseudo sk-pseudo-circle" style="color:#fff;font-size:20px"></text>
                </view>
                <text class="num index--num data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-71 sk-text">25173次学习</text>
              </view>
            </view>
            <view class="item-name index--item-name data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-333 sk-text">HTML5实战</view>
            <view class="item-other index--item-other data-v-1bb6908a index--data-v-1bb6908a">
              <text class="price index--price data-v-1bb6908a index--data-v-1bb6908a"><text class="icon index--icon data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-opacity">￥</text>
              <text class="data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-811 sk-text">22800</text></text>
              <text class="num index--num data-v-1bb6908a index--data-v-1bb6908a sk-transparent sk-text-14-2857-190 sk-text">899 人购买</text>
            </view>
          </view>
          <view class="cart-item index--cart-item data-v-1bb6908a index--data-v-1bb6908a">
            <view class="item-image index--item-image data-v-1bb6908a index--data-v-1bb6908a">
              <image class="course index--course data-v-1bb6908a index--data-v-1bb6908a sk-image"></image>
            </view>
          </view>
          <view class="cart-item index--cart-item data-v-1bb6908a index--data-v-1bb6908a">
            <view class="item-image index--item-image data-v-1bb6908a index--data-v-1bb6908a">
              <image class="course index--course data-v-1bb6908a index--data-v-1bb6908a sk-image"></image>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>