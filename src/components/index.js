// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
import {useIntersectionObserver} from '@vueuse/core'
import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
import XtxCarousel from '@/components/library/xtx-carousel.vue'
import XtxMore from '@/components/library/xtx-more.vue'
import XtxBread from '@/components/library/xtx-bread.vue'
import XtxBreadItem from '@/components/library/xtx-bread-item.vue'


export const componentPlugin = {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式

    // 注册组件
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)

    // 定义指令
    app.directive('lazyload', {
            mounted(el, binding) {
                // el: 指令绑定的那个元素 img
                // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
                // console.log(el, binding.value)
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            // 图片加载，停止监听
                            stop()
                        }
                    },
                )
            }
        })
  }
}
