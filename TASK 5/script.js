const audio = document.getElementById('audio');
const songName = document.getElementById('song-name');
const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3']; // Add your song names here
let currentIndex = 0;

function playSong(index) {
  audio.src = `songs/${songs[index]}`;
  songName.textContent = `Now Playing: ${songs[index]}`;
  audio.play();
}

function playNext() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
}

function playPrev() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
