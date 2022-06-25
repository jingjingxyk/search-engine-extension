import { context_menu_search_engin } from "./context-menus-search-engine.js";

let context_menu_init = () => {
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "百度搜索",
      id: "custom-baidu-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "bing搜索",
      id: "custom-bing-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "google搜索",
      id: "custom-google-search-1",
    },
    (info) => {
      console.log(info);
    }
  );

  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "微博搜索",
      id: "custom-weibo-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "微博移动搜索",
      id: "custom-weibo-mobile-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "百度热搜",
      id: "custom-baidu-hot-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "知乎搜索",
      id: "custom-zhihu-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "头条搜索",
      id: "custom-toutiao-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "搜狗知乎搜索",
      id: "custom-sogou-zhihu-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "搜狗微信搜索",
      id: "custom-sogou-weixin-search-1",
    },
    (info) => {
      console.log(info);
    }
  );

  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "中国搜索",
      id: "custom-china-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "人民号搜索",
      id: "custom-people-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "中文维基",
      id: "custom-zh-wikipedia-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
  chrome.contextMenus.create(
    {
      checked: true,
      contexts: ["selection"],
      documentUrlPatterns: ["https://*/*", "http://*/*"],
      enabled: true,
      title: "维基搜索",
      id: "custom-wikipedia-search-1",
    },
    (info) => {
      console.log(info);
    }
  );
};

export { context_menu_init, context_menu_search_engin };
