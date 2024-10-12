import request from '@/utils/request'

/*
* 获取首页分类导航中的品牌数据
* @param limit: 获取个数
* @return Promise
* */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', {limit})
}
