<template>
  <skeleton v-if="loading" />
  <view v-else class="container home-container">
    <!-- 轮播图 -->
    <view class="swiper_box">
      <swiper
        class="swiper"
        circular
        autoplay
        :interval="2000"
        indicator-color="#fff"
        indicator-active-color="#26B7FF"
        :duration="500"
        @change="changeIndex"
      >
        <swiper-item v-for="banner in bannerList" :key="banner.id">
          <view class="swiper_item uni_bg_red">
            <image :src="banner.imageUrl" />
          </view>
        </swiper-item>
      </swiper>

      <view class="indicator">
        <text class="circle" v-for="(item, index) in bannerList.length" :key="index" :class="{ active: index === activeIndex }">
        </text>
      </view>
    </view>

    <!-- card导航 -->
    <view class="card-container">
      <view class="hot_cate">
        <view class="hot_cate_item">
          <navigator class="hot_cate_item_a">
            <image class="hot_cate_item_img" alt="img" src="../../static/images/nav/0.png" />
            <text class="hot_cate_item_name">前端开发</text>
          </navigator>
        </view>
        <view class="hot_cate_item">
          <navigator class="hot_cate_item_a">
            <image class="hot_cate_item_img" alt="img" src="../../static/images/nav/1.png" />
            <text class="hot_cate_item_name">前端开发</text>
          </navigator>
        </view>
        <view class="hot_cate_item">
          <navigator class="hot_cate_item_a">
            <image class="hot_cate_item_img" alt="img" src="../../static/images/nav/2.png" />
            <text class="hot_cate_item_name">前端开发</text>
          </navigator>
        </view>
        <view class="hot_cate_item">
          <navigator class="hot_cate_item_a">
            <image class="hot_cate_item_img" alt="img" src="../../static/images/nav/3.png" />
            <text class="hot_cate_item_name">前端开发</text>
          </navigator>
        </view>
        <view class="hot_cate_item">
          <navigator class="hot_cate_item_a">
            <image class="hot_cate_item_img" alt="img" src="../../static/images/nav/4.png" />
            <text class="hot_cate_item_name">前端开发</text>
          </navigator>
        </view>
      </view>
    </view>

    <!-- 热门课程 -->
    <VList title="热门课程" more="课程" type="course" link="/pages/list/index">
      <VCard v-for="(item, index) in (courseList as any)" :key="item.id" :item="item" type="course" />
    </VList>

    <!-- 名师大咖 -->
    <VList title="名师大咖" more="名师" link="/pages/tearch/list/list">
      <VCard v-for="(item, index) in (teacherList as any)" :key="item.id" :item="item" type="teacher" />
    </VList>

    <v-top />
  </view>
</template>

<script lang="ts" setup>
import VList from '../../components/v-list/index.vue'
import VCard from '../../components/v-card/index.vue'
import { ref } from 'vue'
import { reqBannerList, reqCourseAndTeacherList } from '@/api/home'
import { onLoad, onPageScroll } from '@dcloudio/uni-app'
import type { BannerList, CourseList, TeacherList } from '@/types/home'
import type { SwiperOnChangeEvent } from '@uni-helper/uni-app-types'
import skeleton from '@/components/skeleton/skeleton.vue'

const activeIndex = ref(0)
//轮播图
const bannerList = ref<BannerList[]>([])
//课程列表
const courseList = ref<CourseList[]>([])
//讲师列表
const teacherList = ref<TeacherList[]>([])
//是否在请求数据中
const loading = ref<boolean>(false)

//获取首页轮播图
const getBannerList = async () => {
  //请求数据中为true
  loading.value = true

  const res = await reqBannerList()
  // console.log(res)

  //更新状态
  bannerList.value = res.data.bannerList
  //请求数据后为false
  loading.value = false
}

const changeIndex = (e: SwiperOnChangeEvent) => {
  // console.log(e)
  activeIndex.value = e.detail.current
}

//获取首页讲师、课程列表
const getHomeList = async () => {
  //请求数据中为true
  loading.value = true

  const res = await reqCourseAndTeacherList()
  // console.log(res)

  courseList.value = res.data.courseList
  teacherList.value = res.data.teacherList
  //请求数据后为false
  loading.value = false
}

//监听页面的滚动，获取页面卷去的距离
onPageScroll(({scrollTop})=>{
  //通过事件总线，将页面滚动的距离传递给子组件
  uni.$emit('scrollTop',scrollTop)
})

onLoad(() => {
  getBannerList()
  getHomeList()
})
</script>

<style lang="scss" scoped>
@import '../../components/skeleton/skeleton.scss';
.home-container {
  padding: 16rpx 0rpx;
}

/* 轮播图 */
.swiper_box {
  padding: 0rpx 16rpx;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;

  .swiper {
    height: 360rpx;
    border-radius: 16rpx;
    overflow: hidden;

    .swiper_item {
      width: 100%;
      height: 100%;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
  }

  .indicator .circle {
    width: 30rpx;
    height: 6rpx;
    margin: 0 8rpx;
    border-radius: 6rpx;
    background-color: rgba(233, 228, 228, 0.9);
  }

  .indicator .active {
    background-color: #4db5fb;
    width: 40rpx;
  }
}

.hot_cate {
  padding: 16px 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  margin: 16rpx 12rpx;
  border-radius: 16rpx;

  &_item {
    width: 20%;
    &_a {
      display: flex;
      // @include flex-display;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &_img {
      width: 36px;
      height: 36px;
      margin-bottom: 8px;
    }
    &_name {
      font-size: 12px;
      color: #737780;
    }
  }
}
</style>
