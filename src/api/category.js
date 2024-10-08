// 定义首页导航栏需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 * @returns Promise
 */
export const getCategoryData = () => {
  return request('/home/category/head', 'get')
}
