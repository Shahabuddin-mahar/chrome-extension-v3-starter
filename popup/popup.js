// Popup Controller for Manifest V3 Starter
document.addEventListener("DOMContentLoaded", async () => {
  const tabDomainEl = document.getElementById("tab-domain");
  const clickCounterEl = document.getElementById("click-counter");
  const actionBtn = document.getElementById("action-btn");
  const highlightBtn = document.getElementById("highlight-btn");
  const statusMsg = document.getElementById("status-msg");

  // 1. Get current active tab
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (activeTab && activeTab.url) {
    try {
      const url = new URL(activeTab.url);
      tabDomainEl.innerText = url.hostname;
    } catch {
      tabDomainEl.innerText = "Internal Tab";
    }
  }

  // 2. Load stored click counter from chrome.storage
  chrome.storage.local.get(["clickCount"], (res) => {
    const count = res.clickCount || 0;
    clickCounterEl.innerText = count;
  });

  // 3. Action button: update counter and save to storage
  actionBtn.addEventListener("click", () => {
    chrome.storage.local.get(["clickCount"], (res) => {
      const count = (res.clickCount || 0) + 1;
      chrome.storage.local.set({ clickCount: count }, () => {
        clickCounterEl.innerText = count;
        showStatus("Saved to Chrome storage!");
      });
    });
  });

  // 4. Highlight button: send message to content script
  highlightBtn.addEventListener("click", async () => {
    if (!activeTab || !activeTab.id) return;

    try {
      chrome.tabs.sendMessage(activeTab.id, { action: "HIGHLIGHT_PAGE" }, (response) => {
        if (chrome.runtime.lastError) {
          showStatus("Refresh page to activate script.");
        } else if (response && response.status === "SUCCESS") {
          showStatus("Page highlighted!");
        }
      });
    } catch (e) {
      showStatus("Error communicating with tab.");
    }
  });

  function showStatus(text) {
    statusMsg.innerText = text;
    setTimeout(() => {
      statusMsg.innerText = "";
    }, 2500);
  }
});
