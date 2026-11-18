const scrapbookCover = document.getElementById('scrapbook-cover');
const scrapbookBook = document.getElementById('scrapbook-book');
const spreads = [...document.querySelectorAll('.book-spread')];
const previousPage = document.getElementById('book-prev');
const nextPage = document.getElementById('book-next');
const progress = document.getElementById('book-progress');
const stickerStatus = document.getElementById('sticker-status');
let currentSpread = 0;

function showSpread(index) {
  currentSpread = index;
  spreads.forEach((spread, i) => { spread.hidden = i !== index; });
  previousPage.disabled = index === 0;
  nextPage.textContent = index === spreads.length - 1 ? 'Close book ↗' : 'Next →';
  nextPage.setAttribute('aria-label', index === spreads.length - 1 ? 'Close scrapbook' : 'Next scrapbook pages');
  progress.textContent = `Pages ${index * 2 + 1}–${index * 2 + 2} of ${spreads.length * 2}`;
  stickerStatus.textContent = '';
}

document.getElementById('book-open').addEventListener('click', () => {
  scrapbookCover.hidden = true;
  scrapbookBook.hidden = false;
  showSpread(0);
  nextPage.focus();
});

previousPage.addEventListener('click', () => {
  if (currentSpread > 0) showSpread(currentSpread - 1);
});

nextPage.addEventListener('click', () => {
  if (currentSpread < spreads.length - 1) {
    showSpread(currentSpread + 1);
  } else {
    scrapbookBook.hidden = true;
    scrapbookCover.hidden = false;
    document.getElementById('book-open').focus();
  }
});

document.querySelectorAll('[data-sticker]').forEach(button => {
  button.addEventListener('click', () => {
    const page = spreads[currentSpread].querySelectorAll('.book-page')[Math.floor(Math.random() * 2)];
    if (page.querySelectorAll('.placed-sticker').length >= 8) {
      stickerStatus.textContent = 'This page is full of love. Try the next one!';
      return;
    }
    const sticker = document.createElement('span');
    sticker.className = 'placed-sticker';
    sticker.textContent = button.dataset.sticker;
    sticker.setAttribute('aria-hidden', 'true');
    sticker.style.left = `${12 + Math.random() * 72}%`;
    sticker.style.top = `${15 + Math.random() * 70}%`;
    sticker.style.setProperty('--turn', `${Math.random() * 50 - 25}deg`);
    page.appendChild(sticker);
    stickerStatus.textContent = 'Sticker added to our scrapbook ♡';
  });
});
