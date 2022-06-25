let context_menu_search_engin = () => {
  chrome.contextMenus.onClicked.addListener((info) => {
    console.log(info);
    console.log(info.selectionText);
    if (info.selectionText.length > 0) {
      let url = null;
      if (info.menuItemId.search(/custom-baidu-search-/) !== -1) {
        url = gotToBaiDuSearch(info.selectionText);
      }

      if (info.menuItemId.search(/custom-bing-search-/) !== -1) {
        url = gotToBingSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-google-search-/) !== -1) {
        url = gotToGoogleSearch(info.selectionText);
      }

      if (info.menuItemId.search(/custom-china-search-/) !== -1) {
        url = goToChinaSearch(info.selectionText);
      }

      if (info.menuItemId.search(/custom-sogou-zhihu-search-/) !== -1) {
        url = goToSouGoZhiHuSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-sogou-weixin-search-/) !== -1) {
        url = goToSouGoWeiXinSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-people-search-/) !== -1) {
        url = goToPeopleSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-zhihu-search-/) !== -1) {
        url = goToZhiHuSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-weibo-search-/) !== -1) {
        url = goToWeiBoSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-weibo-mobile-search-/) !== -1) {
        url = goToWeiBoMobileSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-baidu-hot-search-/) !== -1) {
        url = goToBaiduHotSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-zh-wikipedia-search-/) !== -1) {
        url = goToZhWikipediaSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-toutiao-search-/) !== -1) {
        url = gotoTouTiaoSearch(info.selectionText);
      }
      if (info.menuItemId.search(/custom-wikipedia-search-1/) !== -1) {
        url = goToWikipediaSearch(info.selectionText);
      }

      if (url) {
        chrome.tabs.create(
          {
            // url: gotToGoogleSearch(info.selectionText),
            url: url,
          },
          (tab) => {
            console.log(tab);
          }
        );
      }
    }
  });

  let gotToBaiDuSearch = (word) => {
    word = word.replace(/\s/, "+");
    return `https://www.baidu.com/s?ie=utf-8&wd=${word}`;
  };
  let gotToBingSearch = (word) => {
    word = word.replace(/\s/, "+");
    return `https://cn.bing.com/search?q=${word}`;
  };
  let gotToGoogleSearch = (word) => {
    word = word.replace(/\s/, "+");
    return `https://www.google.com/search?q=${word}`;
  };

  let goToChinaSearch = (word) => {
    return (
      `http://www.chinaso.com/newssearch/all/allResults?q=` +
      encodeURIComponent(word)
    );
  };

  // https://www.sogou.com/sogou?query=%E5%A5%B6%E5%A4%B4%E4%B9%90&ie=utf8
  //
  let goToSouGoZhiHuSearch = (word) => {
    return `https://www.sogou.com/sogou?query=${encodeURIComponent(
      word
    )}&ie=utf8&insite=zhihu.com`;
  };
  let goToSouGoWeiXinSearch = (word) => {
    return `https://weixin.sogou.com/weixin?type=2&query=${encodeURIComponent(
      word
    )}&ie=utf8`;
  };

  let goToPeopleSearch = (word) => {
    return `https://mp.pdnews.cn/Pc/SearchApi/search?keyword=${encodeURIComponent(
      word
    )}`;
  };
  let goToZhiHuSearch = (word) => {
    return `https://www.zhihu.com/search?q=${encodeURIComponent(word)}`;
  };
  let goToWeiBoSearch = (word) => {
    return `https://s.weibo.com/weibo?q=${encodeURIComponent(word)}`;
  };
  let goToWeiBoMobileSearch = (word) => {
    return `https://m.weibo.cn/search?containerid=100103type%3D1%26q%3D${encodeURIComponent(
      word
    )}`;
  };

  let goToBaiduHotSearch = (word) => {
    return `https://m.baidu.com/sf/vsearch?pd=realtime_ugc&atn=list&tn=vsearch&word=${encodeURIComponent(
      word
    )}`;
  };

  let goToGithubSearch = (word) => {
    return `https://github.com/search?q=${encodeURIComponent(word)}`;
  };
  let goToGiteeSearch = (word) => {
    return `https://search.gitee.com/?skin=rec&type=repository&q=${encodeURIComponent(
      word
    )}`;
  };

  let goToZhWikipediaSearch = (word) => {
    return `https://zh.wikipedia.org/w/index.php?title=Special:%E6%90%9C%E7%B4%A2&search=${encodeURIComponent(
      word
    )}&go=Go&ns0=1`;
  };
  let goToWikipediaSearch = (word) => {
    return `https://www.wikipedia.org/wiki/${encodeURIComponent(word)}`;
  };

  let gotoTouTiaoSearch = (word) => {
    return `https://so.toutiao.com/search?dvpf=pc&keyword=${encodeURIComponent(
      word
    )}`;
  };
};

export { context_menu_search_engin };
