// pages/login/index.js
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

  },
  /**
   * 获取用户信息函数
   */
  handleUserInfo: function () {
    // 0从缓存中获取头像和昵称
    const avatar = wx.getStorageSync('avatar')
    const nickname = wx.getStorageSync('nickname')
    // 有值 直接跳转
    if (avatar && nickname) {
      wx.navigateTo({
        url: '/pages/upload/index',//跳转的目标地址 不需要加文件类型
      })
      return
    }
    // 1.获取用户信息，获取用户的微信昵称以及头像
    wx.getUserProfile({
      desc: '这是获取用户信息函数',
      success: (res) => {
        console.log(res);
        // 头像地址
        const avatar = res.userInfo.avatarUrl
        // 昵称
        const nickname = res.userInfo.nickName
        // 2.将获取的信息存储到缓存中，方便上传使用
        wx.setStorageSync('avatar', avatar)
        wx.setStorageSync('nickname', nickname)
        // 3.跳转到上传页面
        wx.navigateTo({
          url: '/pages/upload/index',//跳转的目标地址 不需要加文件类型
        })
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