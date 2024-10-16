<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner }
}
</script>
<style scoped lang="less"></style>
