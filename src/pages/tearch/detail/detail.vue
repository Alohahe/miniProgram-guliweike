<template>
  <view class="container teacher-detail">
    <view class="block">
      <!-- <h3 class="title">个人介绍</h3> -->
      <view class="content">
        <view class="avatar">
          <image src="../../../static/images/course.jpg" />
        </view>
        <h3 class="name">雷老师 高级讲师</h3>
        <!--        <view class="tag">
          具有多年项目开发和教育培训经验，曾在日本野村证券主持开发金融证券项目，对金融数据处理具有丰富的经验。曾为北京积水潭医院主持开发过网络预约，挂号，分诊系统等。对主流框架Spring、Struts2、Hibernate、MyBatis、SpringMVC、SpringBoot、SpringCloud有深入的研究。
        </view> -->
        <view class="intro">
          具有多年项目开发和教育培训经验，曾在日本野村证券主持开发金融证券项目，对金融数据处理具有丰富的经验。曾为北京积水潭医院主持开发过网络预约，挂号，分诊系统等。对主流框架Spring、Struts2、Hibernate、MyBatis、SpringMVC、SpringBoot、SpringCloud有深入的研究。
        </view>
      </view>
    </view>

    <view class="block all-course">
      <h3 class="title">主讲课程</h3>
      <view class="main-course">
        <view class="course-item" v-for="item in 3" :key="item">
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
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.teacher-detail {
  padding: 6rpx 0rpx;
}

.block {
  margin-bottom: 14px;
  margin: 16rpx;
  border-radius: 16rpx;

  // .title {
  //   font-size: 28rpx;
  //   height: 100rpx;
  //   line-height: 100rpx;
  //   color: #737780;
  //   border-bottom: 1px solid #a1a7b2;
  // }

  .content {
    font-size: 24rpx;
    color: #a1a7b2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40rpx;
    background-color: #fff;
    border-radius: 16rpx;

    .avatar {
      width: 200rpx;
      height: 200rpx;

      image {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    .name {
      font-size: 30rpx;
      color: #4db5fb;
      text-align: center;
      margin-top: 30rpx;
    }

    // .tag {
    //   background: #f2f2f2;
    //   color: #888;
    //   padding: 20rpx 30rpx;
    //   line-height: 36rpx;
    // }

    .intro {
      line-height: 60rpx;
      margin-top: 30rpx;
      text-indent: 32rpx;
    }
  }
}

.all-course {
  margin: 30rpx 16rpx 30rpx 16rpx;
  border-radius: 16rpx;
  background-color: #fff;
  padding: 20rpx 0rpx;

  .title {
    height: 60rpx;
    line-height: 60rpx;
    margin-left: 20rpx;
  }

  .course-item {
    padding: 30rpx 20rpx;
    margin-bottom: 16rpx;
    border-bottom: 1px solid #ccc;

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

  .course-item:last-child {
    border: none;
  }
}
</style>
