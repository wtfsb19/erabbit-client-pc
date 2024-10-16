<template>
  <div class="home-banner">
    <XtxCarousel :sliders="sliders" auto-play/>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { findBanner } from '@/api/home'

export default {
  name: 'HomeBanner',
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

    return {
      sliders
    }
  }
}
</script>
<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}

.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }

  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
