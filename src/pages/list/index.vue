<template>
  <view class="container course">
    <view class="course-list">
      <view class="course-item">
        <navigator class="course-item-a" url="/pages/course/detail/detail">
          <view class="item-cover">
            <image src="../../static/images/course.jpg" />
          </view>
          <view class="item-content">
            <h3 class="content-title">尚硅谷大数据技术</h3>
            <view class="content-price">
              <view class="price">¥19800</view>
              <view class="buy-num">6676人已购买</view>
            </view>
          </view>
        </navigator>
      </view>
      
      <view class="course-item">
        <navigator class="course-item-a" url="/pages/course/detail/detail">
          <view class="item-cover">
            <image src="../../static/images/course.jpg" />
          </view>
          <view class="item-content">
            <h3 class="content-title">尚硅谷大数据技术</h3>
            <view class="content-price">
              <view class="price">¥19800</view>
              <view class="buy-num">6676人已购买</view>
            </view>
          </view>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.course {
  padding: 16rpx;
}

.course-item {
  padding: 30rpx;
  margin-bottom: 16rpx;
  background-color: #fff;
  border-radius: 16rpx;
  
  .course-item-a {
    display: flex;
    
    .item-cover {
      width: 113px;
      height: 64px;
      image {
        width: 100%;
        height: 100%;
      }
    }
    
    .item-content {
      flex: 1;
      padding-left: 12px;
      padding-top: 8px;

      .content-title {
        font-size: 12px;
        color: #a1a7b2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        height: 34px;
      }
      .content-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .price {
          color: #4db5fb;
          font-size: 28rpx;
        }
        
        .buy-num {
          font-size: 24rpx;
          color: #888;
        }
      }
    }
  }
}
</style>
