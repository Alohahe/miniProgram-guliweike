<template>
  <view v-show="isShow" class="back_top" :style="{ bottom: bottom, right: right }" @tap="backTop">
    <image src="../../static/images/backTop.png" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onPageScroll, onReady } from '@dcloudio/uni-app'

//接收父组件传递的数据
const props = withDefaults(
  defineProps<{
    bottom?: number | string
    right?: number | string
  }>(),
  {
    bottom: 20,
    right: 10
  }
)

//是否展示回到顶部按钮
const isShow = ref(false)

//回到顶部
const backTop = () => {
  uni.pageScrollTo({ scrollTop: 0, duration: 500 })
}

onReady(() => {
  //页面渲染完成，监听父组件传递的数据
  uni.$on('scrollTop', (scrollTop) => {
    //获取系统屏幕高度
    const { windowHeight } = uni.getSystemInfoSync()

    //当父组件卷去的屏幕距离大于屏幕高度时，展示回到顶部按钮
    if (scrollTop - windowHeight >= 0) {
      isShow.value = true
    } else {
      isShow.value = false
    }
  })
})
</script>

<style scoped lang="scss">
.back_top {
  position: fixed;
  right: 20rpx;
  bottom: 60rpx;
  z-index: 10000;
  width: 100rpx;
  height: 100rpx;

  image {
    width: 100%;
    height: 100%;
  }
}
</style>
