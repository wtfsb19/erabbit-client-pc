<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <div>
    <AppTopnav></AppTopnav>
    <AppHeader></AppHeader>
    <main class="app-body">
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <AppFooter>底部</AppFooter>
  </div>
</template>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
