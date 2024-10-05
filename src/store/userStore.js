import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    // 用户信息
    profile: {
      id: '',
      avatar: '',
      nickname: '',
      account: '',
      mobile: '',
      token: ''
    }
  })

  // 修改用户信息，payload就是用户信息对象
  const setUserInfo = (payload) => {
    userInfo.profile = payload
  }

  return {
    userInfo,
    setUserInfo
  }

}, {
  // 开启数据持久化
  persist: true,
})
