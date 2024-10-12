// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

import XtxSkeleton from './skeleton/xtx-skeleton.vue'

export const componentPlugin = {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式

    // 注册组件
    app.component(XtxSkeleton.name, XtxSkeleton)
  }
}