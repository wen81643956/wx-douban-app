Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    cardList: {
      type: Array,
      value: []
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    imageUrl: 'https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2514175916.jpg'
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})