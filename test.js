`
css3 特性
1. 动画  keyframes 
2. transition   transform keyframes 
盒模型
盒模型有三种：box-sizing:content-box|border-box|inherit，默认的是content-box。

移动端布局
rem根节点html 

em
Flex 布局   
backdrop-filter 
.background {
    filter: blur(4px); 背景模糊
    position: absolute;
    width: 100%;
    height: 100%;
  }


垂直居中布局

  display: flex;
  justify-content: center;
  align-items: center;

`


`

React 新版生命周期
React 16 中删除了如下三个生命周期。

componentWillMount
componentWillReceiveProps
componentWillUpdate



`
`
vue 2.0 生命周期

beforecreate : 举个栗子：可以在这加个loading事件
created ：在这结束loading，还做一些初始化，实现函数自执行
mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
beforeUpdate 
updated 
beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容



vue2 的双向数据绑定是利⽤ES5 的⼀个 API ，Object.definePropert()对数据进⾏劫持 结合 发布订阅模式的⽅式来实现的。
vue3 中使⽤了 es6 的 ProxyAPI 对数据代理，通过 reactive() 函数给每⼀个对象都包⼀层 Proxy，通过 Proxy 监听属性的变化，从⽽
实现对数据的监控。


`