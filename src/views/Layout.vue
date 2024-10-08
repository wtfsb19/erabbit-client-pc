<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader
  }
}
</script>

<template>
  <div>
    <AppTopnav></AppTopnav>
    <AppHeader>头部</AppHeader>
    <main>
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <footer>底部</footer>
  </div>
</template>

<style scoped lang="less">

</style>
