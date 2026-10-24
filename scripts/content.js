// Content Script injected into all web pages
console.log("[ContentScript] Manifest V3 Starter content script loaded on:", window.location.href);

// Listen for messages from Popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "HIGHLIGHT_PAGE") {
    // Add subtle visual effect border to active webpage
    const banner = document.createElement("div");
    banner.id = "v3-starter-banner";
    banner.style.position = "fixed";
    banner.style.top = "16px";
    banner.style.right = "16px";
    banner.style.zIndex = "999999";
    banner.style.background = "#4f46e5";
    banner.style.color = "#ffffff";
    banner.style.padding = "10px 18px";
    banner.style.borderRadius = "12px";
    banner.style.fontFamily = "sans-serif";
    banner.style.fontSize = "13px";
    banner.style.fontWeight = "bold";
    banner.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    banner.innerText = "⚡ Manifest V3 Starter Injected!";

    document.body.appendChild(banner);

    setTimeout(() => {
      banner.remove();
    }, 3000);

    sendResponse({ status: "SUCCESS" });
  }
  return true;
});
