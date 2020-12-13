//index.js


Page({
  data: { image: [{
    mode: 'scaleToFill',
   
  }]//设置图片不保持纵横比缩放图片，使图片完全适应
   
},
  //跳转到image页面
   max: function() {
    wx.navigateTo({
        url: '../wifi_station/image/image',
    })
}
})

