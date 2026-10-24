// Background Service Worker (Manifest V3)
console.log("[ServiceWorker] Background service worker initialized.");

// Context Menu on Install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "v3StarterAction",
    title: "V3 Starter: Inspect Selection",
    contexts: ["selection"]
  });
  console.log("[ServiceWorker] Context menu created.");
});

// Handle Context Menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "v3StarterAction") {
    console.log("[ServiceWorker] Selected text:", info.selectionText);
    chrome.action.setBadgeText({ text: "✓" });
    chrome.action.setBadgeBackgroundColor({ color: "#4f46e5" });
    setTimeout(() => {
      chrome.action.setBadgeText({ text: "" });
    }, 3000);
  }
});

// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "PING") {
    sendResponse({ status: "PONG", timestamp: Date.now() });
  }
  return true;
});
