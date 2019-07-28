Page({
  data: {
    top: 0,
    hot: [  
      { name: '10.6.1.1' },
      { name: '10.6.1.2' },
      { name: '10.6.1.3' },
      { name: '10.6.1.4' },
      { name: '10.6.1.5' },
      { name: '10.6.1.6' },
      { name: '10.6.1.7' },
      { name: '10.6.1.8' },
      { name: '10.6.1.9' },
    ],
    activeTab: 0, 
    titleOpacity: 1,
    shadow: false,
    ipAddress: '',
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    let titleOpacity = 1 - scrollTop * 0.02;
    let shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: '小程序官方示例',
      });
    } else {
      my.setNavigationBar({
        title: ' ',
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setData({
      shadow,
      titleOpacity,
    });
  },
  formSubmit: function(e){
    console.log(e.detail.value)
  },
  bindKeyInput(e){
    this.setData({
      ipAddress: e.detail.value,
    });
  },
  connectTest() {
    console.log(this.data.ipAddress)
    this.addToHistory(this.data.ipAddress)
    dd.confirm({
    title: '温馨提示',
    content: '查询IP: '+this.data.ipAddress,
    confirmButtonText: '马上查询',
    cancelButtonText: '暂不需要',

    success: (result) => {
      dd.alert({
        title: `${result.confirm}`,
      });
      this.setData({
        ipAddress: '',
      });
    },
    })
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset
    this.setData({
      activeTab: index,
    });
  },
  onLoad() {
    this.setData({
      history: dd.getStorageSync({ key: 'searchHistory' }).data,
    });
    console.log(dd.getStorageSync({ key: 'searchHistory' }).data);
    dd.getSystemInfo({
      success: (res) => {
        if (res.statusBarHeight && res.titleBarHeight) {
          this.setData({
            top: res.statusBarHeight + res.titleBarHeight,
          });
        }
      },
    });
  },
  clear() {
    my.confirm({
      content: '确定删除相关历史？',
      success: (res) => {
        if (res.confirm) {
          dd.removeStorage();
          this.setData({
            history: [],
          });
        }
      },
    })
  },
  onClear() {
    this.setData({
      value: '',
    });
  },
  onCancel() {
    this.setData({
      componentSuggestions: [],
      apiSuggestions: [],
      value: '',
    });
    my.navigateBack();
  },
  addToHistory(keyword) {
    const searchHistory = dd.getStorageSync({ key: 'searchHistory' }).data || [];
    let index = -1;

    for (let i = 0; i < searchHistory.length; i++) {
      if (searchHistory[i].name === keyword) {
        index = i;
        break;
      }
    }

    let history = [];

    if (searchHistory.length >= 8) {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory.slice(0, 7)];
      } else {
        searchHistory.splice(index, 1).slice(0, 7)
        history = [{ name: keyword }, ...searchHistory];
      }
    } else {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory];
      } else {
        searchHistory.splice(index, 1) 
        history = [{ name: keyword }, ...searchHistory];
      }
    }

    dd.setStorageSync({
      key: 'searchHistory',
      data: history,
    });

    this.setData({
      history,
    })
  }
});

