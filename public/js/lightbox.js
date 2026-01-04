document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  img.id = "lightbox-img";
  lightbox.appendChild(img);

  const caption = document.createElement("p");
  caption.id = "lightbox-caption";
  lightbox.appendChild(caption);

  const prev = document.createElement("div");
  prev.id = "lightbox-prev";
  prev.innerHTML = "&#10094;";
  lightbox.appendChild(prev);

  const next = document.createElement("div");
  next.id = "lightbox-next";
  next.innerHTML = "&#10095;";
  lightbox.appendChild(next);

  // --- GLOBAL SCOPE INSIDE DOMContentLoaded ---
  let currentIndex = 0;
  let images = [];

  // --- populate images array from gallery links ---
  const galleryLinks = document.querySelectorAll(".gallery a");
  galleryLinks.forEach((link, index) => {
    images.push({
      src: link.href,
      caption: link.querySelector("img").alt || ""
    });

    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = index;
      showImage();
      lightbox.classList.add("active");
    });
  });

  // --- function to show the current image ---
  function showImage() {
    img.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].caption;
  }

  // --- prev/next buttons ---
  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });

  // --- close when clicking outside image ---
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
  });

  // --- KEYBOARD NAVIGATION ---
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    }
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });

});
