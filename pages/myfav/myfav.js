// pages/myfav/myfav.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showBusy('请求中...');
    const that = this;
    qcloud.request({
      url: `${config.service.host}/weapp/getMyFavList`,
      method: 'POST',
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        if (result.data.data.length > 0) {
          that.setData({
            list: result.data.data
          })
        } else {
          that.setData({
            list: []
          })
        }
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  refresh: function(){
    const that = this;
    qcloud.request({
      url: `${config.service.host}/weapp/getMyFavList`,
      method: 'POST',
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        if (result.data.data.length > 0){
          that.setData({
            list: result.data.data
          })
        }else {
          that.setData({
            list: []
          })
        }
        
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  }
})