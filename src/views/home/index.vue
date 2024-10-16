<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
      </div>
      <!-- 新鲜好物 -->
      <HomeNew></HomeNew>
      <!-- 人气推荐 -->
      <HomeHot></HomeHot>
      <!-- 热门品牌 -->
      <HomeBrand></HomeBrand>
    </div>
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner.vue'
import HomeNew from '@/views/home/components/home-new.vue'
import HomeHot from '@/views/home/components/home-hot.vue'
import HomeBrand from '@/views/home/components/home-brand.vue'

export default {
  name: 'PageHome',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand
  }
}
</script>
<style scoped lang="less"></style>
