let currentImages = [];
let currentIndex = 0;

function openLightbox(images) {
  currentImages = images;
  currentIndex = 0;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = currentImages[currentIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Navigate images
function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('lightbox-img').src = currentImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('lightbox-img').src = currentImages[currentIndex];
}

// Arrow key navigation
document.addEventListener('keydown', function(event) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'flex') { // only when lightbox is open
    if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  }
});