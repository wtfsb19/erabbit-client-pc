<template>
  <div class='home-category' @mouseleave="currentId = null">
    <ul class="menu">
      <li v-for="item in menuList" :key="item.id" @mouseenter="currentId = item.id"
          :class="{active:currentId===item.id}">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <!-- 二级菜单(由于初始数据无children，直接遍历会报错) -->
        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`">
            {{ sub.name }}
          </RouterLink>
        </template>
        <template v-else>
          <!-- 骨架屏 -->
          <XtxSkeleton width="60px" height="18px" style="margin-right:5px" bg="rgba(255,255,255,0.2)"/>
          <XtxSkeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)"/>
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4 v-if="currentCategory">{{ currentCategory.id === 'brand' ? '品牌' : '分类' }}推荐
        <small>根据您的购买或浏览记录推荐</small></h4>
      <!-- 获取数据后进行渲染，且当有数据时才渲染 -->
      <ul v-if="currentCategory && currentCategory.goods && currentCategory.goods.length">
        <li v-for="item in currentCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="currentCategory && currentCategory.brands && currentCategory.brands.length">
        <li class="brand" v-for="item in currentCategory.brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <div class="info">
              <p class="place"><i class="iconfont icon-dingwei"></i>{{ item.place }}</p>
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="desc ellipsis-2">{{ item.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCategoryStore } from '@/store/category'
import { computed, reactive, ref, onMounted } from 'vue'
import { findBrand } from '@/api/home'

export default {
  name: 'HomeCategory',
  setup () {
    // 1. 获取vuex的一级分类，并且只需要两个二级分类
    // 2. 需要在组件内部，定义一个品牌数据
    // 3. 根据vuex的分类数据和组件中定义品牌数据，得到左侧分类完整数据(9分类+1品牌)数组
    // 4. 进行渲染即可
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{
        id: 'brand-chilren',
        name: '品牌推荐'
      }],
      brands: []
    })
    // 取出store中的数据
    const categoryStore = useCategoryStore()
    const menuList = computed(() => {
      const list = categoryStore.categoryList.map(item => {
        return {
          id: item.id,
          name: item.name,
          // 防止初始化没有children的时候调用slice函数报错
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })

    // 获取当前分类ID
    const currentId = ref(null)
    // 根据ID获取对应的分类
    const currentCategory = computed(() => {
      return menuList.value.find(item => item.id === currentId.value)
    })
    // 获取首页品牌数据
    // findBrand(10).then(res => {
    //   brand.brands = res.result
    // })

    onMounted(async () => {
      const res = await findBrand(6)
      brand.brands = res.result
      // console.log(brand.brands)
    })

    return {
      currentId,
      menuList,
      currentCategory
    }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;

      &:hover, &.active {
        background: @xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }


  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;

    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;

      small {
        font-size: 16px;
        color: #666;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;

        &:nth-child(3n) {
          margin-right: 0;
        }


        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;

          &:hover {
            background: #e3f9f4;
          }

          img {
            width: 95px;
            height: 95px;
          }

          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;

            .name {
              font-size: 16px;
              color: #666;
            }

            .desc {
              color: #999;
            }

            .price {
              font-size: 22px;
              color: @priceColor;

              i {
                font-size: 16px;
              }
            }
          }
        }
      }

      li.brand {
        height: 180px;

        a {
          align-items: flex-start;

          img {
            width: 120px;
            height: 160px;
          }

          .info {
            p {
              margin-top: 8px;
            }

            .place {
              color: #999;
            }
          }
        }
      }
    }
  }

  &:hover {
    .layer {
      display: block;
    }
  }
}

.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}

@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
