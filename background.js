// Listen for the extension's button click
chrome.action.onClicked.addListener((tab) => {
  // Send a message to the content script to start the scan
  chrome.tabs.sendMessage(tab.id, { action: "scan" }, (response) => {
    console.log(response.status);
  });
});
