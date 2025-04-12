# Netflix AutoPIN 🔐

Typing a 4-digit PIN every time you open Netflix? Absolutely not.

Netflix AutoPIN is a Chrome extension that automatically fills in your Netflix profile PIN for you. Simple, fast, and
quietly doing its job — like all good technology should.

---

## Features

- Automatically enters your Netflix PIN on the profile lock screen.
- Stores your PIN securely in your browser (locally, on your device only).
- Easy-to-use interface to save or update your PIN anytime.

---

## Installation Guide

### 1. Download the Extension

If you’re familiar with Git:

```bash
  git clone https://github.com/blvckvnic0rn/netflix-autopin.git
```

Otherwise, simply download the latest version here:
[Release v.1.0.0](https://github.com/blvckvnic0rn/netflix-autopin/archive/refs/tags/Release.zip)

Then:

    1. Download the ZIP file.

    2. Extract it somewhere on your computer (for example, on your Desktop).

    3. The extracted folder should contain these files:

```bash
manifest.json
content.js
popup.html
popup.js
popup.css
```


 
### 2. Load the Extension in Chrome

1. Open Google Chrome and go to:

```bash
  chrome://extensions/
```

2. Enable Developer Mode (top-right corner).
3. Click Load unpacked.
4. Select the folder you extracted in the previous step.

**Done! The extension is now installed and ready to go.**

## How to Use

1. Click on the Netflix AutoPIN icon in Chrome (top-right corner).

2. Enter your 4-digit Netflix PIN and click Save PIN.

3. Next time Netflix asks for your PIN → it will be automatically filled for you.

*Relax and enjoy Netflix like a civilized person.*

**❗Important**
> Your PIN is stored securely using `chrome.storage.local`.  
> This means your PIN never leaves your device and is not shared or sent anywhere online.


**Troubleshooting & Support**

If Netflix changes something on their site (it happens...) and the extension stops working:

- Open an issue here on GitHub
- Or contact me directly →  https://github.com/blvckvnic0rn

**Credits**

Built with care, simplicity, and a little healthy laziness
by [blvckvnic0rn](https://github.com/blvckvnic0rn)