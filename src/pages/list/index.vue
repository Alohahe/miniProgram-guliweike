<template>
  <view class="container course">
    <view class="course-list">
      <view class="course-item" v-for="item in courseList" :key="item.id">
        <navigator class="course-item-a" :id="item.id" :url="`/pages/course/detail/detail?id=${item.id}`">
          <view class="item-cover">
            <image :src="item.cover" />
          </view>
          <view class="item-content">
            <h3 class="content-title">{{ item.title }}</h3>
            <view class="content-price">
              <view class="price">¥{{ item.price }}</view>
              <view class="buy-num">{{item.buyCount}}人已购买</view>
            </view>
          </view>
        </navigator>
      </view>
    </view>
    <uni-load-more :status="status" />
  </view>
</template>

<script setup lang="ts">
import { reqCourseList } from '@/api/course'
import type { ICourse, IPagination } from '@/types/course'
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import type { UniLoadMoreStatus } from '@uni-helper/uni-ui-types'
import { ref } from 'vue'

//分页
const pagination = ref({
  page: 1,
  limit: 10
})
//数据总条数
const total = ref(0)
//课程列表
const courseList = ref<ICourse[]>([])
//是否加载更多
const status = ref<UniLoadMoreStatus>('more')


//获取课程列表
const getCourseList =async () => {
  //获取数据前，加载
  status.value = 'loading'

  const {data} = await reqCourseList(pagination.value)

  total.value = data.total

  //更新课程列表数据：刷新前一次数据和刷新后数据
  courseList.value = [...courseList.value,...data.items]

  //请求结束，判断数据是否已请求完毕
  if(courseList.value.length === total.value){
    status.value = 'noMore'
  }else{
    status.value = 'more'
  }
}

//上拉刷新
onReachBottom(()=>{
  //判断：数据是否加载完
  if(courseList.value.length === total.value) return
  
  //上拉刷新时，只需要让页面+1
  pagination.value.page += 1
  //重新获取数据
  getCourseList()
})

//下拉加载更多
onPullDownRefresh(()=>{
  //下拉刷新，重置页码和总数即可
  pagination.value.page = 1
  total.value = 0
  //重新获取数据
  getCourseList()
  //获取完数据后，停止下拉刷新
  uni.stopPullDownRefresh()
})

onLoad(() => {
  getCourseList()
})
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
