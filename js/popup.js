const qrcode = new QRCode("qrcode");
const makeCode = url => {
  qrcode.makeCode(url);
  console.log("Current URL: ", url);
};
const queryInfo = {
  active: true,
  currentWindow: true
};
chrome.tabs.query(queryInfo, tabs => {
  const tab = tabs[0];
  const url = tab.url;
  console.assert(typeof url == "string", "tab.url should be a string");
  makeCode(url);
});
