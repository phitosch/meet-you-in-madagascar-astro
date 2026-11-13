const preview = document.querySelector('.welcome-video-player iframe');
const play = document.querySelector('.welcome-video-play');
const dialog = document.querySelector('.welcome-video-dialog');
const close = document.querySelector('.welcome-video-close');
const mobile = matchMedia('(max-width: 700px)');

function updatePreviewFocus() {
  preview.tabIndex = mobile.matches ? -1 : 0;
}

updatePreviewFocus();
mobile.addEventListener('change', updatePreviewFocus);

play.addEventListener('click', () => {
  const player = preview.cloneNode();
  player.tabIndex = 0;
  player.removeAttribute('loading');
  const url = new URL(preview.src);
  url.searchParams.set('autoplay', '1');
  player.src = url;
  dialog.append(player);
  dialog.showModal();
});

close.addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => dialog.querySelector('iframe').remove());
