//index.js
//获取应用实例
const app = getApp()
const common = require('../../mods/js/common.js');
Page({
  data: {
    nav: [{
      categoryName: '体育',
      id: 'sports',
      isCurrent: true
    }, {
      categoryName: '娱乐',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '时尚',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '体育',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '娱乐',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '时尚',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '体育',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '体育',
      id: 'sports',
      isCurrent: false
    }],
    toView: 'item0',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    list: [{
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }]
  },
  onLoad: function () {

  },
  changeNav: function (e) {
    const that = this;
    common.changeNav(e, that);
  },
  showDetail: function(e){
    let id = e.currentTarget.dataset.id;
    common.showDetail(id)
  }
})
