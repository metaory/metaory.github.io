# metaory.github.io

[metaory.github.io](https://metaory.github.io/)

```bash
pnpm install
pnpm dev
```

---

Chrome [origin trial](https://developer.chrome.com/blog/html-in-canvas-origin-trial)

Local: `chrome://flags/#canvas-draw-element` → Enabled.

Production: [register the trial](https://developer.chrome.com/origintrials/#/view_trial/html-in-canvas) for `https://metaory.github.io` and add:

```html
<meta http-equiv="origin-trial" content="YOUR_TOKEN" />
```
