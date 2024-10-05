import { defineStore } from 'pinia'
import { ref } from 'vue'

// 分类模块
export default defineStore('category', () => {
  const categoryList = ref([])
  return {
    categoryList
  }
})
