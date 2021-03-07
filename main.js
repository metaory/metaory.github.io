const ilist = ['龜', '落', '⛬', '樂', '🟕', '🟖', '🟗', '🟘', '卑', '喝', 'ﮊ', 'ﯶ', '頋', '神','更','廓']
window.onload = () => document.querySelector('main').innerText = ilist[Math.floor((Math.random() * ilist.length))]

/* to be my home / newtab for vimium */
//
// const { log:l } = console
// this.vomnibarUI != null ? this.vomnibarUI : this.vomnibarUI = new UIComponent("pages/vomnibar.html", "vomnibarFrame", l)
// chrome.extension.sendMessage({"Vomnibar": "activate"}, (o, e) =>  l({ o, e }) )
// UIComponentServer.postMessage()
// chrome-extension://********************************/pages/vomnibar.html
