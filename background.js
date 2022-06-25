import {
  context_menu_init,
  context_menu_search_engin,
} from "./context-menus.js";

chrome.runtime.onInstalled.addListener(async (details) => {
  context_menu_init();
});
/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // chrome.tabs.sendMessage(sender.tab.id, request);
  console.log(sender, request);
  // sendResponse(JSON.stringify({"recived_result":"ok","request":request,"client_list":cache}));
  sendResponse(request, sender);
});

 */

context_menu_search_engin();
