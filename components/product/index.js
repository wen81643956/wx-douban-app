Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    sku: {
      type: Object,
      value: {}
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})