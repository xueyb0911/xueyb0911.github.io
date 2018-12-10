# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

useEslint代码规范检查
数据变化要去改变视图才会触发生命周期方法
build/webpack.base.conf.js ---extensions 配置之后，import时可以不用加后缀

问题一:
在List.vue添加商品到购物车时，commit数据到vuex，但删除商品时没有commit，从MiniCart.vue获取的数据却是删除以后的？？？

问题二：
在data.vue监听cityId打印，点击选择城市会出现undefined？？？
原因：选择城市走city路由，city是mian下面的子路由，所以又重新走了mian路由，但没有传值

问题三：
点击选择城市，城市名称改变为原来的默认值？？？
原因：选择城市走city路由，city是mian下面的子路由，所以又重新走了mian路由

<提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象>

问题四：
没有引用样式，也会收到影响(MainTitle里面设置header标签样式header:{position:fixed},其他页面也受到影响)？？？

问题五：
myOrder.vue  v-bind:src 不能显示本地图片？？？ 必须要import图片才可以

清除vuex数据时不能state={} ？？？

在style里 添加 scoped
<style type="text/less"  lang="less" scoped>
用这种方式相当于在页面上加入了唯一标示。 

监听一个原生事件。可以使用 .native 修饰

<span>给line-height，同级的<span>也会被影响？？？

.vue文件，里面高度给100%无效？？？

input输入框当点击输入的时候不需要input输入框有边框显示,加上outline:none

vue中图片地址会被编码，图片切换时需要另加一个标志判断

收货地址--选择具体地址时输入匹配暂时先不实现，

由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
// Vue.set
Vue.set(example1.items, indexOfItem, newValue)
// Array.prototype.splice
example1.items.splice(indexOfItem, 1, newValue)

给子元素"margin-top"时，若这个子元素前面没有其他内容，这个margin-top值会应用到父元素上
解决方案，给父元素设置：before