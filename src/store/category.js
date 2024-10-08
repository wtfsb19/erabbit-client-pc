import { defineStore } from 'pinia'
import { ref } from 'vue'
import { topCategoryList } from '@/api/constants'
import { getCategoryData } from '@/api/category'
// 分类模块
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref(topCategoryList)

  // 获取分类列表并更新默认数据
  const getCategoryList = async () => {
    const res = await getCategoryData()
    categoryList.value = res.result
  }


  return {
    categoryList,
    getCategoryList
  }
})
