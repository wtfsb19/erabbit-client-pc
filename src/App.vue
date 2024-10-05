<template>
  <div>APP
    <button @click="testRequest">测试请求</button>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
    const testRequest = () => {
      request('/member/profile', 'get', {a:10}).then(res => {
        console.log(res)
      })
    }
    return {
      testRequest
    }
  }
}
</script>

<style lang="less">


</style>
