function checkAnswer(answer) {
  const result = document.getElementById("quizResult");
  if (answer === 4) {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong, try again!";
    result.style.color = "red";
  }
}

async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke = await response.json();
  document.getElementById("jokeDisplay").textContent = `${joke.setup} — ${joke.punchline}`;
}

// ✅ NEW: Carousel logic with your own images
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg"
];

let imageIndex = 0;
const carousel = document.getElementById("carouselImage");

function nextImage() {
  imageIndex = (imageIndex + 1) % images.length;
  carousel.src = images[imageIndex];
}

function prevImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  carousel.src = images[imageIndex];
}

// Set initial image when page loads
window.onload = function() {
  carousel.src = images[imageIndex];
};
