(async () => {
  let { init } = await import(
    chrome.runtime.getURL("js/content-script/init.js")
  );
  init();
})();
