const elements = [
  '[data-uia="next-episode-seamless-button"]',
  '[data-uia="interrupt-autoplay-continue"]',
  ".watch-video--skip-content-button",
];

setInterval(() => {
  for (const element of elements) {
    document.querySelector(element)?.click();
  }
}, 100);
