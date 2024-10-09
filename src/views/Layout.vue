<script>
import AppTopNav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import { useCategoryStore } from '@/store/category'


export default {
  name: 'xtx-layout',
  setup () {
    const categoryStore = useCategoryStore()
    // layout 组件渲染完成后执行，获取分类数据，以便其他子组件使用
    categoryStore.getCategoryList()
  },
  components: {
    AppTopNav,
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <div>
    <AppTopNav></AppTopNav>
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
