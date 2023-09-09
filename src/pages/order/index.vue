<template>
  <view class="container order-list">
    <view class="course_list">
      <view v-for="item in 3" :key="item" class="course_list_item">
        <view class="course_list_item_a">
          <view class="item_cover">
            <image src="../../static/images/course.jpg" />
          </view>
          
          <view class="item_content">
            <h3 class="content_title">尚硅谷大数据技术</h3>
            
            <view class="content_price">
              <view class="price">¥19800</view>
              <uni-tag :text="'已支付'" :type="'success'" :circle="true" size="mini" />
            </view>
            
            <view class="buy_num">订单编号：20230322120202888</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>

.order-list {
  padding: 16rpx;
}

.course_list {
  // padding: 15px 15px 0;
}

.course_list_item {
  background-color: #fff;
  margin-bottom: 16rpx;
  padding: 30rpx;
  border-radius: 11rpx;
  
  .course_list_item_a {
    display: flex;
    
    .item_cover {
      width: 220rpx;
      height: 140rpx;
      
      image {
        width: 100%;
        height: 100%;
      }
    }
    
    .item_content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0px 12px 0 12px;

      .content_title {
        font-size: 12px;
        color: #a1a7b2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
      .content_price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price {
          color: #4db5fb;
          font-size: 16px;
        }
      }
      .buy_num {
        width: 100%;
        font-size: 12px;
        color: #a1a7b2;
      }
    }
  }
}
</style>
