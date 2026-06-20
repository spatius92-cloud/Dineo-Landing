# 🌹 Dineo Landing Page

A romantic, cozy letter from Screw to Dineo Ramaloto.

## 🚀 Quick Start

### Clone & Open Locally

```bash
git clone https://github.com/yourusername/dineo-landing.git
cd dineo-landing/dineo-landing
open index.html
# Or run with Python: python -m http.server 8000
# Then visit http://localhost:8000
```

### Deploy to GitHub Pages

This repo auto-deploys to GitHub Pages when you push to `main`.

1. **Enable GitHub Pages** in your repo settings:
   - Settings → Pages → Source: `Deploy from a branch` → Branch: `gh-pages`
   - Your site will be live at `https://yourusername.github.io/dineo-landing`

2. **Push to main** and the workflow runs automatically ✨

---

## 📁 Project Structure

```text
dineo-landing/
├── index.html        ← Main page (sections & layout)
├── style.css         ← All styles (colours, fonts, layout)
├── main.js           ← Slideshow, petals, scroll effects, WhatsApp
├── images.js         ← ⭐ ADD YOUR PHOTOS HERE (filenames)
├── images/           ← ⭐ DROP YOUR PHOTOS IN THIS FOLDER
└── README.md         ← This file
```

---

## 🖼️ How to Add Dineo's Photos

1. **Copy your photo files** into the `/images/` folder.
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Portrait/vertical photos look best (they fill the full screen)

2. **Open `images.js`** and list each filename in the array:

   ```js
   const SLIDESHOW_IMAGES = [
     "images/photo1.jpg",
     "images/date-night.png",
     "images/smile.jpg",
   ];
   ```

3. **Save `images.js`** and refresh the browser. Done!

---

## ✏️ Editing the Text

Open `index.html` in VS Code.

Each section is clearly labelled with a comment:

```html
<!-- SECTION 1: INTRODUCTION -->
<!-- SECTION 2: APOLOGY -->
<!-- SECTION 3: THE TRUTH -->
<!-- SECTION 4: PROPOSAL -->
<!-- SECTION 5: CONCLUSION -->
```

Edit the `<p>` tags inside each section to change the message.

---

## 🎨 Changing Colours / Fonts

Open `style.css` and edit the `:root` block at the top:

```css
:root {
  --rose-deep:  #8B2635;   /* Dark rose (titles, accents) */
  --rose-mid:   #C4566A;   /* Medium rose (labels) */
  --rose-blush: #F2B8C2;   /* Light rose (hero text, dividers) */
  --cream:      #FBF6EF;   /* Main background */
  --gold:       #C9965C;   /* Gold accent */
}
```

---

## ⏱️ Slideshow Timing

Open `images.js` and adjust:

```js
const SLIDE_DURATION   = 4000;  // How long each photo shows (ms)
const SLIDE_TRANSITION = 1200;  // Crossfade speed (ms)
```

---

## 📱 Mobile

The page is fully optimised for mobile screens.
Open it on your phone browser directly — no special steps needed.

---

## 💬 WhatsApp Button

The button in the conclusion section opens WhatsApp with a pre-filled
message addressed to **+267 77924840** (Screw's number).

The note reminds Dineo to message from her own number (+267 77 498 918).

To change the pre-filled message, open `main.js` and edit:

```js
const prefilledMsg = encodeURIComponent(
  "Screw, I read your letter… 🌹"
);
```

---

Made with love — for Dineo 🌹
