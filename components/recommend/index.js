Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    imageUrl: 'https://qnmob3.doubanio.com/img/files/file-1519399406.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg'
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})