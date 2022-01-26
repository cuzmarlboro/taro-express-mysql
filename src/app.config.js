// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: ["pages/index/index", "pages/order/order"],
  window: {
    backgroundTextStyle: "light", // 下拉 loding 的样式
    navigationBarBackgroundColor: "#fff", // 导航栏背景颜色
    navigationBarTitleText: "远方", // 导航栏标题
    navigationBarTextStyle: "black", // 导航栏标题字体颜色
  },
  tabBar: {
    color: "#7F8389", // tab 上的文字默认颜色
    selectedColor: "#5495e6", // tab 上的文字选中时的颜色
    borderStyle: "black", // tabbar 上边框的颜色
    backgroundColor: "#fff", // tabbar 背景色
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/images/index-unselected.png", // 未选中时图标
        selectedIconPath: "assets/images/index-selected.png", // 选中时的图标
        text: "首页",
      },
      {
        pagePath: "pages/order/order",
        iconPath: "assets/images/order-unselected.png", // 未选中时图标
        selectedIconPath: "assets/images/order-selected.png", // 选中时的图标
        text: "我的订单",
      },
    ],
  },
});
