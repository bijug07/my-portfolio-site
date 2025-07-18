document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle
  const toggleButton = document.getElementById("toggle-theme");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Greet user
  const greetButton = document.getElementById("click-me");
  greetButton.addEventListener("click", function () {
    alert("Hello Guest! Welcome to my portfolio site.");
  });

  // Clock
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("live-clock").textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Carousel
  const screenshots = ["form.png", "report.png", "vba.png"];
  let currentIndex = 0;
  const imgElement = document.getElementById("carousel-image");

  function showImage(index) {
    imgElement.src = screenshots[index];
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % screenshots.length;
    showImage(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    showImage(currentIndex);
  }

  // Auto-rotate every 3 seconds
  setInterval(showNextImage, 3000);

  // Button click events
  document.getElementById("next-btn").addEventListener("click", showNextImage);
  document.getElementById("prev-btn").addEventListener("click", showPrevImage);
});
