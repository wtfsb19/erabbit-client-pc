import { defineStore } from 'pinia'
import { ref } from 'vue'

// 购物车状态
export default defineStore('cart', () => {
  const cartList = ref([])
  return {
    cartList
  }
}, {
  persist: true
})
