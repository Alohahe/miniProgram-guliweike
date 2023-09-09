<template>
  <view class="container teacher-wrap">
    <view class="teacher-list">
      <view class="teacher-item">
        <navigator class="item-a" url="/pages/tearch/detail/detail">
          <view class="teacher-logo">
            <image mode="aspectFill" src="../../../static/images/course.jpg" />
          </view>
          <view class="teacher-name">雷老师</view>
          <view class="teacher-intro">
            具有多年项目开发和教育培训经验，曾在日本野村证券主持开发金融证券项目，对金融数据处理具有丰富的经验。曾为北京积水潭医院主持开发过网络预约，挂号，分诊系统等。对主流框架Spring、Struts2、Hibernate、MyBatis、SpringMVC、SpringBoot、SpringCloud有深入的研究。
          </view>
        </navigator>
      </view>

      <view class="teacher-item">
        <navigator class="item-a" url="/pages/tearch/detail/detail">
          <view class="teacher-logo">
            <image mode="aspectFill" src="../../../static/images/course.jpg" />
          </view>
          <view class="teacher-name">雷老师</view>
          <view class="teacher-intro">
            具有多年项目开发和教育培训经验，曾在日本野村证券主持开发金融证券项目，对金融数据处理具有丰富的经验。曾为北京积水潭医院主持开发过网络预约，挂号，分诊系统等。对主流框架Spring、Struts2、Hibernate、MyBatis、SpringMVC、SpringBoot、SpringCloud有深入的研究。
          </view>
        </navigator>
      </view>

      <view class="teacher-item">
        <navigator class="item-a" url="/pages/tearch/detail/detail">
          <view class="teacher-logo">
            <image mode="aspectFill" src="../../../static/images/course.jpg" />
          </view>
          <view class="teacher-name">雷老师</view>
          <view class="teacher-intro">
            具有多年项目开发和教育培训经验，曾在日本野村证券主持开发金融证券项目，对金融数据处理具有丰富的经验。曾为北京积水潭医院主持开发过网络预约，挂号，分诊系统等。对主流框架Spring、Struts2、Hibernate、MyBatis、SpringMVC、SpringBoot、SpringCloud有深入的研究。
          </view>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.teacher-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0rpx 16rpx 0rpx 16rpx;

  .teacher-item {
    width: 49%;
    margin-top: 16rpx;
    background-color: #fff;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 16rpx;

    .item-a {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: center;

      .teacher-logo {
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
        margin-top: 16px;

        image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .teacher-name {
        font-size: 28rpx;
        color: #4db5fb;
        margin: 10px 0;
      }

      .teacher-intro {
        padding-top: 10rpx;
        margin: 20rpx;
        // height: 40px;
        font-size: 24rpx;
        color: #a1a7b2;
        border-top: 1px dotted #e2e2e2;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
