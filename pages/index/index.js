//index.js
Page({
  data: {
    motto: 'Hello World',
  },
  onLoad: function () {
  },
  onShareAppMessage: function () {
    return {
      title: '人人爱男人宝',
      path: '/pages/index/index'
    }
  }
})
