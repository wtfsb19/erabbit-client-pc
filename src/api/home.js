import request from '@/utils/request'

/**
* 获取首页分类导航中的品牌数据
* @param {Number} limit
* @return Promise
* */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', {limit})
}

/**
 * 获取轮播图数据
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物数据
 * @returns {Promise<AxiosResponse<any>> | *}
 */
export const findNew = () => {
  return request('/home/new', 'get')
}
