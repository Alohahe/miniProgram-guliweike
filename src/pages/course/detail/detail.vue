<template>
  <view class="container" v-if="courseDetail.course && courseDetail.course.id">
    <!-- 课程内容 -->
    <view class="course">
      <!-- banner 图片 -->
      <view class="banner">
        <image :src="courseDetail.course.cover" />
      </view>

      <view class="info">
        <view class="price">
          <view class="price-info">
            <text>¥</text>
            <text>{{ courseDetail.course.price }}</text>
          </view>
          <view class="buy_count">购买人数 {{ courseDetail.course.buyCount }}</view>
        </view>
        <view class="name">{{ courseDetail.course.title }}</view>
        <view class="tag_list">
          <view class="tag_item">{{ courseDetail.course.subjectLevelOne }}</view>
        </view>
      </view>

      <view class="course_card">
        <view id="anchor0" class="intro card">
          <view class="title"> 讲师介绍 </view>

          <navigator url="/pages/tearch/detail/detail" class="teacher_info">
            <view class="avatar">
              <image :src="courseDetail.course.avatar" />
            </view>
            <view class="teacher_desc">
              <view class="teacher_name">{{ courseDetail.course.teacherName }}</view>
              <view class="teacher_intro">
                {{ courseDetail.course.intro }}
              </view>
            </view>
          </navigator>
          <view class="title course-title"> 课程详情 </view>
          <view class="course-detail" v-html="courseDetail.course.description"> </view>
        </view>

        <view id="anchor1" class="catalogue card">
          <view class="title"> 课程目录 </view>
          <view class="catalogue_list">
            <uni-collapse accordion>
              <uni-collapse-item v-for="item in courseDetail.chapterList" :key="item.id" :title="item.title">
                <view class="task_list">
                  <view class="task_items" v-for="(item1, index) in item.children" :key="item.id">
                    <image
                      class="task_type"
                      src="https://cdn-cos-ke.myoed.com/ke_proj/mobilev2/m-core/f1c59a1527e075f6ebfba3d7ac605f07.png"
                    />
                    <view class="task_title">{{ index + 1 }}. {{ item1.title }}</view>
                    <image
                      class="task_icon"
                      src="https://cdn-cos-ke.myoed.com/ke_proj/mobilev2/m-core/064fdd1eb99fcb8bef80085f2b548e4b.png"
                    />
                  </view>
                </view>
              </uni-collapse-item>
            </uni-collapse>
          </view>
        </view>

        <view id="anchor2" class="card">
          <view class="title">
            <view class="title_left"> 学员评价 ({{ total }})</view>
            <navigator
              :url="`/pages/course/comment/comment?courseId=${props.id}&teacherId=${courseDetail.course.teacherId}`"
              class="title_right"
            >
              <text>查看全部</text>
              <uni-icons type="right" color="#666c80" size="12"></uni-icons>
            </navigator>
          </view>

          <view class="comment_wrapper">
            <v-comment :list="commentList"></v-comment>
            <navigator
              :url="`/pages/course/comment/comment?courseId=${props.id}&teacherId=${courseDetail.course.teacherId}`"
              class="more-comment"
            >
              点击查看更多评论
            </navigator>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部购买 -->
    <view class="bottom_tabbar">
      <view class="bottom_wrap">
        <view class="bottom_button">
          <view class="favo_button" @tap="changeCollect(courseDetail.isCollect)">
            <view :class="['bg', courseDetail.isCollect ? 'active' : '']"></view>
            <text>{{ courseDetail.isCollect ? '已收藏' : '收藏' }}</text>
          </view>
        </view>
        <view class="bottom_main">
          <view v-if="!courseDetail.isBuy" class="buy_button" @tap="toLearn">
            <text>去学习</text>
          </view>

          <view v-else class="buy_button" @tap="toBuy">
            <text>去购买</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reqCancelCollectCourse, reqCollectCourse, reqCourseDetail } from '@/api/course'
import VComment from '../../../components/v-comment/v-comment.vue'
import { ref } from 'vue'
import type { ICourseDetail } from '@/types/course'
import { onLoad } from '@dcloudio/uni-app'
import { reqCommentList } from '@/api/comment'
import type { ICommentListItem } from '@/types/comment'
import { reqCreateOrder, reqOrderInfo, reqWeixinPay } from '@/api/pay'
import useUserStore from '@/store/userStore'
import { storeToRefs } from 'pinia'

//实例化仓库
const userStore = useUserStore()
//解构实例
const { token } = storeToRefs(userStore)

//接受父组件传递的数据
const props = defineProps<{
  id: string
}>()

//评论分页
const pagination = ref({
  page: 1,
  limit: 10
})

const total = ref(0)
const commentList = ref<ICommentListItem[]>([])

//去学习
const toLearn = () => {
  uni.reLaunch({
    url: '/pages/course/video/video'
  })
}

//去购买
const toBuy = async () => {
  //判断用户是否登录
  if (!token) {
    //跳转至登录页
    uni.reLaunch({
      url: '/pages/login/index'
    })
    return
  }
  //创建订单
  const res = await reqCreateOrder(props.id)
  //获取订单信息
  if (res.code === 200) {
   //跳转至订单详情页
   uni.navigateTo({
    url:`/pages/order/index?orderId=${res.data.orderId}`
   })
  }
}

//收藏与取消收藏
const changeCollect = async (status: boolean) => {
  //判断collectStatus状态
  status ? await reqCancelCollectCourse(props.id) : await reqCollectCourse(props.id)

  //重新获取课程详情
  getCourseDetail()
}

//课程详情
const courseDetail = ref<ICourseDetail>({} as ICourseDetail)

//获取课程详情
const getCourseDetail = async () => {
  const res = await reqCourseDetail(props.id)

  //更新状态
  courseDetail.value = res.data
}

//获取评价列表
const getCommentList = async () => {
  const res = await reqCommentList(pagination.value.page, pagination.value.limit, props.id)

  commentList.value = res.data.items
  total.value = res.data.total
}

onLoad(() => {
  getCourseDetail()
  getCommentList()
})
</script>

<style scoped lang="scss">
.container {
  padding: 16rpx;
  box-sizing: border-box;
  padding-bottom: 110rpx;
}

.course {
  .banner {
    height: 210px;
    width: 100%;

    image {
      width: 100%;
      height: 100%;
      border-radius: 16rpx;
    }
  }

  .info {
    border-radius: 0 0 12px 12px;
    padding: 16px;
    margin-bottom: 12px;
    background-color: #fff;

    .price {
      display: flex;
      justify-content: space-between;
      font-size: 34rpx;

      .price-info {
        color: #4db5fb;
      }

      .buy_count {
        font-size: 26rpx;
        color: #666c80;
      }
    }

    .name {
      font-size: 34rpx;
      margin: 24rpx 0rpx;
      font-weight: bold;
      color: #333;
    }

    .tag_list {
      display: flex;

      .tag_item {
        border: 1px solid #ccc;
        color: #777;
        display: inline-block;
        padding: 0px 10px;
        font-size: 12px;
        height: 18px;
        border-radius: 16px;
        line-height: 18px;
        margin-right: 8px;
      }
    }
  }

  .tab_wrapper {
    border-radius: 0 0 16rpx 16rpx;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 32rpx;
    color: #3c464f;
    padding: 16px 0;
  }

  .course_card {
    display: flex;
    flex-direction: column;
    border-radius: 16rpx;
  }

  .card {
    padding: 0 32rpx;
    background: #fff;
    margin-bottom: 20rpx;
    flex: 1;
    border-radius: 16rpx;
  }

  .intro {
    border-radius: 16rpx;

    .teacher_info {
      display: flex;
      align-items: center;
      border-radius: 16rpx;
      background: #f5f6fa;
      padding: 24rpx;

      .avatar {
        width: 72rpx;
        height: 72rpx;
        border-radius: 50%;

        image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .teacher_desc {
        flex: 1;
        overflow: hidden;
        margin-left: 20rpx;

        .teacher_name {
          font-size: 24rpx;
          color: #3e414d;
        }

        .teacher_intro {
          word-break: break-all;
          font-size: 12px;
          color: #666c80;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: normal;
          margin-top: 8rpx;
        }
      }
    }

    .course-title {
      margin-top: 40rpx;
    }

    .course-detail {
      padding-bottom: 16px;
      font-size: 28rpx;
      line-height: 56rpx;
      color: #3c464f;
    }
  }

  .title_right {
    text {
      font-size: 26rpx;
    }
  }

  .comment_wrapper {
    .more-comment {
      padding: 20rpx 0rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      font-size: 26rpx;
    }
  }

  .catalogue {
    .catalogue_list {
      .task_list {
        .task_items {
          display: flex;
          padding: 12px;
          .task_type {
            width: 16px;
            height: 16px;
          }

          .task_title {
            flex: 1;
            font-size: 12px;
            color: #3e414d;
            margin-left: 10px;
            &::after {
              content: '';
              position: absolute;
              bottom: -12px;
              left: 0;
              width: 100%;
              height: 0.07143rem;
              background-color: #c9d0d6;
              transform: scaleY(0.5);
              opacity: 0.5;
            }
          }

          .task_icon {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
.bottom_tabbar {
  // background: #fff;
  // padding: 8px 16px 0 16px;
  // position: fixed;
  // bottom: 0;
  // z-index: 1000;
  // width: 100%;
  // border-radius: 16rpx;
  // box-sizing: border-box;

  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background: #fff;

  .bottom_wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .bottom_button {
    flex: 1;
    padding: 6px 0;
    .favo_button {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      color: #8797a1;
      .bg {
        width: 24px;
        height: 24px;
        background-image: url('https://cdn-cos-ke.myoed.com/ke_proj/mobilev2/m-core/0cfab2184a7ac26a164fdc334d40d382.png');
        background-size: 100% 100%;
        &.active {
          background-image: url('https://cdn-cos-ke.myoed.com/ke_proj/mobilev2/m-core/88b416217e2eca5e9e9f1f3fac1e7f24.png');
        }
      }
    }
  }
  .bottom_main {
    flex: 1;
    padding: 6px 0;
    .buy_button {
      width: 90%;
      height: 2.85714rem;
      line-height: 2.85714rem;
      text-align: center;
      color: #fff;
      border: none;
      font-size: 1.14286rem;
      border-radius: 7.14286rem;
      background-color: #ff7a38;
    }
  }
}
</style>
