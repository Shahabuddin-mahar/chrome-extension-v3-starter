# 🧩 Chrome Extension Manifest V3 Starter Kit (Production-Ready)

[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Zero Build Needed](https://img.shields.io/badge/Zero%20Build%20Steps-Load%20Unpacked-brightgreen.svg)](#)

> **A modern, clean, and battle-tested Chrome Extension boilerplate compliant with Manifest V3. Includes Popup UI, Background Service Worker, Content Scripts, Chrome Storage API, and Context Menus.**

---

## ⚡ Why This Starter?

Following Google's mandatory sunset of Manifest V2, building modern Chrome extensions has become complex. This repository gives you a clean, zero-bloat foundation that you can load directly into Chrome, Brave, or Edge in **under 30 seconds**.

### 🛠️ Architecture Overview:
- 🎨 **Modern Popup:** Dark-mode responsive popup UI with stats counter and tab inspector.
- ⚙️ **Service Worker (`background.js`):** Non-persistent background event handler with context menu support.
- 💉 **Content Script (`content.js`):** Injected DOM manipulation script communicating with Popup via `chrome.tabs.sendMessage`.
- 💾 **State Persistence:** Uses `chrome.storage.local` to persist user settings and data across sessions.

---

## 🚀 How to Load and Test in 30 Seconds

1. Clone or download this repository:
   ```bash
   git clone https://github.com/Shahabuddin-mahar/chrome-extension-v3-starter.git
   ```
2. Open Google Chrome (or Edge / Brave) and navigate to:
   ```text
   chrome://extensions
   ```
3. Enable **Developer Mode** using the toggle switch in the top-right corner.
4. Click **"Load unpacked"** in the top-left corner.
5. Select the folder containing `manifest.json`.
6. Click the extension icon in your browser toolbar to see it in action!

---

## 💼 Monetization Ideas ($15 – $49)
- Use this template to build your own niche Chrome extension (e.g., Upwork proposal helper, Amazon price tracker, AI summarizer).
- Sell starter kits and templates to developers on Gumroad / LemonSqueezy.

---

## ⚖️ License
Distributed under the MIT License. See `LICENSE` for details.
