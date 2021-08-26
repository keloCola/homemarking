// pages/upload/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从缓存中获取头像和昵称
    const avatar = wx.getStorageSync('avatar')
    const nickname = wx.getStorageSync('nickname')
    // 绑定数据
    this.setData({
      avatar,
      nickname
    })
  },
  /**
   * 上传头像和昵称点击事件
   */
  handleUpload: function () {
    // 弹窗
    wx.showModal({
      title: '提示',
      content: '是否确定授权',
      success: (res) => {
        //  需要手动关闭
        //  点击确定
        if (res.confirm) {
          wx.showLoading({
            title: '正在提交',
          })
          // 请求课程token接口
          wx.request({
            url: 'https://qinchenju.com/homemaking/v1/token',
            method: 'POST',
            data: {
              i_code: '123456',//课程里的单号
              order_no: '2021010122211100',//课程订单长度
            },
            success: (res) => {
              //  更新用户信息接口
              const token = res.data.data.token
              wx.request({
                url: 'https://qinchenju.com/homemaking/v1/user',
                method: 'PUT',
                header: {
                  token
                },
                data: {
                  nickname: this.data.nickname,//从data中取值
                  avatar: this.data.avatar
                },
                success: (res) => {
                  wx.hideLoading()
                  // 显示打钩
                  wx.showToast({
                    title: '提交成功',
                    icon: 'success'
                  })
                }
              })
            }
          })
          // setTimeout(() => {
          //   // 隐藏loading
          //   wx.hideLoading()
          //   // 显示打钩
          //   wx.showToast({
          //     title: '提交成功',
          //     icon:'success'
          //   })
          // }, 1000);
        }
        // 点击取消
      }
    })
  },
  /**
   * 更多 点击事件
   */
  handleMore: function () {
    // 点击显示操作菜单
    wx.showActionSheet({
      itemList: ['返回上一页'],
      success: (res) => {
        if (res.tapIndex === 0) {
          // 无参数 默认返回上一层
          wx.navigateBack()
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})