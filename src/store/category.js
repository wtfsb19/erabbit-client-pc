import { defineStore } from 'pinia'
import { ref } from 'vue'
import { topCategoryList } from '@/api/constants'
import { getCategoryData } from '@/api/category'
// 存储的分类数据
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref(topCategoryList)

  // 获取分类列表并更新默认数据
  const getCategoryList = async () => {
    const res = await getCategoryData()
    // 设置一个open属性用于控制二级目录的显示
    res.result.forEach(item => item.open = false)
    categoryList.value = res.result
  }

  // 定义两个修改open属性的函数，用于控制二级目录的显示
  const show = (id) => {
    const currentCategory = categoryList.value.find(item => item.id === id)
    currentCategory.open = true
  }
  const hide = (id) => {
    const currentCategory = categoryList.value.find(item => item.id === id)
    currentCategory.open = false
  }


  return {
    categoryList,
    getCategoryList,
    show,
    hide
  }
})
