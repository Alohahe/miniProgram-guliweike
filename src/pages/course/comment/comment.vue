<template>
  <view class="container comment">
    <v-comment :list="commentList"></v-comment>
    <uni-load-more :status="load" />

    <view class="comment_bar">
      <input
        class="input_box"
        placeholder="请点击输入"
        v-model.trim="content"
        cursor-spacing="10"
        :adjust-position="false"
        :style="{ position: 'relative', bottom: inputHeight + 'px' }"
        @confirm="handleComment"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      />
      <uni-icons
        class="input_icon"
        @tap="submitComment"
        :style="{ position: 'relative', bottom: inputHeight + 'px' }"
        type="paperplane-filled"
        size="20"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VComment from '../../../components/v-comment/v-comment.vue'
import type { ICommentListItem } from '@/types/comment'
import { reqCommentList, reqSubmitComment } from '@/api/comment'
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import type { InputOnFocusEvent } from '@uni-helper/uni-app-types'

//接收父组件传递的数据
const props = defineProps<{
  courseId: string
  teacherId: number
}>()

//是否显示加载更多
const load = ref('more')

//评论内容
const content = ref('')

const inputHeight = ref(0)
//评论分页
const page = ref(1)
const limit =ref(10)

const total = ref(0)
const commentList = ref<ICommentListItem[]>([])

//提交评论
const submitComment = async ()=>{
  //准备请求参数
  const params = {
    content:content.value,
    courseId:props.courseId,
    teacherId:props.teacherId
  }

  const res = await reqSubmitComment(params)
  if(res.code === 200){
    //清除输入框内容
    content.value=''
    //重新获取列表数据
    getCommentList()
  }
}

//获取评价列表
const getCommentList = async () => {
  //发送请求前，显示加载中
  load.value = 'loading'

  const res = await reqCommentList(page.value, limit.value, props.courseId)

  commentList.value = [...commentList.value, ...res.data.items] //上拉加载更多时，将上次的数据合并到当前请求数据
  total.value = res.data.total

  //发送请求后，判断是否加载完毕
  if (commentList.value.length === total.value) {
    load.value = 'more'
  } else {
    load.value = 'no-more'
  }
}

const handleComment = () => {}

const handleFocus = (e:InputOnFocusEvent) => {
  if (e.detail.height) {
    inputHeight.value = e.detail.height //这个高度就是软键盘的高度
  }
}
const handleBlur = () => {
  inputHeight.value = 0 //这个高度就是软键盘的高度
}
const handleInput = () => {}

//上拉加载更多
onReachBottom(() => {
  //判断数据是否加载完毕,加载完毕阻止继续刷新
  if (commentList.value.length === total.value) return
  //页码加1
  page.value += 1
  //重新获取数据
  getCommentList()
})

onLoad(() => {
  getCommentList()
})
</script>

<style lang="scss" scoped>
.comment {
  background: white;
  padding: 16px 16px 50px 16px;
  height: 100%;
  position: fixed;
  width: 100%;

  .comment_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 120rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 86.7%, 0) 0,
      hsla(0, 0%, 86.7%, 0.2) 0.42857rem,
      hsla(0, 0%, 86.7%, 0.2) 0.57143rem,
      #fff 0.64286rem,
      #fff
    );

    .input_box {
      width: 80%;
      height: 60rpx;
      line-height: 60rpx;
      background-color: #f2f3f7;
      border-radius: 16rpx;
      padding-left: 20rpx;
      font-size: 28rpx;
    }

    .input_icon {
      margin-left: 20rpx;
    }
  }
}
</style>
