const elements = [
  '.rai-custom-skip-to-button:not(.vjs-hidden)',
  '[data-uia="next-episode-seamless-button"]',
  '[data-uia="interrupt-autoplay-continue"]',
  '[data-purpose="go-to-next-button"]',
  ".watch-video--skip-content-button",
  '.skip__button.body-copy'
];

setInterval(() => {
  for (const element of elements) {
    document.querySelector(element)?.click();
  }
}, 100);
