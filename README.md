# metaory.github.io

Vite + React + [Canvas UI](https://canvasui.dev/docs) [Particle Reveal](https://canvasui.dev/docs/components/particle-reveal).

```bash
pnpm install
pnpm dev
```

## Why canvasui.dev works without the flag

They serve a Chrome [origin trial](https://developer.chrome.com/blog/html-in-canvas-origin-trial) token bound to `canvasui.dev`. That enables HTML-in-Canvas for their visitors only. Your origin (`localhost` / `metaory.github.io`) needs its own token (or the local flag).

Local: `chrome://flags/#canvas-draw-element` → Enabled.

Production: [register the trial](https://developer.chrome.com/origintrials/#/view_trial/html-in-canvas) for `https://metaory.github.io` and add:

```html
<meta http-equiv="origin-trial" content="YOUR_TOKEN">
```

Deploy: push to `master`. Pages Source → **GitHub Actions**.
