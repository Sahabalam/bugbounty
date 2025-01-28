document.getElementById("scanButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "scan" }, (response) => {
      console.log(response.status);
    });
  });
});

// Listen for payload updates from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.payload) {
    document.getElementById("payloadInfo").innerText = `Testing Payload: ${request.payload}`;
  }
});
