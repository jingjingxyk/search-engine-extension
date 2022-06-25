let init = () => {
  console.log(location.href);
  let ip_location = get_ip_info();
  if (ip_location) {
    send(ip_location);
  }
  console.log(ip_location);
  let url = baiduSearch("1.1.1.1");
};
let get_ip_info = () => {
  let data = {};
  let ip_box = document.querySelector(".c-gap-right");
  if (ip_box) {
    let box = ip_box.parentElement;
    if (box) {
      let ip_info = ip_box.innerText;
      let ip = ip_info.replace(/\s/, "").replace("IP地址:", "");

      box.removeChild(box.firstElementChild);
      let location = box.innerText;
      // console.log(ip,location)
      data["ip"] = ip;
      data["location"] = location;
    }
  }
};
let send = (ip_location) => {
  chrome.runtime.sendMessage(JSON.stringify(ip_location), (response) => {
    console.log(response);
  });
};
let get_schedule_conf = () => {};
let baiduSearch = (ip) => {
  return (
    "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + ip
  );
};
export { init };
