<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>{{ topCategory?.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height:500px"/>
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in topCategory.children" :key="item.id">
            <a href="javascript:;">
              <img :src="item.picture" alt="">
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 不同分类商品 -->
    </div>
  </div>
</template>

<script>
import { findBanner } from '@/api/home'
import { ref, onMounted, computed } from 'vue'
import { useCategoryStore } from '@/store/category'
import { useRoute } from 'vue-router'

export default {
  name: 'TopCategory',
  setup () {
    // 获取轮播图数据
    const sliders = ref([])
    const getBannerList = async () => {
      const res = await findBanner()
      sliders.value = res.result
    }
    onMounted(() => {
      getBannerList()
    })

    // 根据路由上的ID，从pinia中获取分类数据
    const categoryStore = useCategoryStore()
    const route = useRoute()

    const topCategory = computed(() => {
      let cate = {}
      const item = categoryStore.categoryList.find(item => {
        return item.id === route.params.id
      })
      if (item) cate = item
      return cate
    })

    return {
      sliders,
      topCategory
    }
  }
}
</script>


<style scoped lang="less">

</style>
