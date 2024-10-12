<script>
import AppTopNav from '@/views/layout/components/app-topnav.vue'
import AppHeader from '@/views/layout/components/app-header.vue'
import AppFooter from '@/views/layout/components/app-footer.vue'
import AppHeaderSticky from '@/views/layout/components/app-header-sticky.vue'
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
    AppFooter,
    AppHeaderSticky
  }
}
</script>

<template>
  <div>
    <AppTopNav></AppTopNav>
    <AppHeader></AppHeader>
    <AppHeaderSticky></AppHeaderSticky>
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
