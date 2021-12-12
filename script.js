// Player
let music = document.querySelector(".music-element");
let playBtn = document.querySelector(".play");
let seekBar = document.querySelector(".seekbar");
let currentTime = document.querySelector(".current-time");
let duration = document.querySelector(".duration");

const handlePlay = () => {
  if (music.paused) {
    music.play();
    playBtn.className = "pause";
    playBtn.innerHTML = "<i class='material-icons'>pause</i>";
  } else {
    music.pause();
    playBtn.className = "play";
    playBtn.innerHTML = "<i class='material-icons'>play_arrow</i>";
  }

  music.addEventListener("ended", () => {
    playBtn.className = "play";
    playBtn.innerHTML = "<i class='material-icons'>play_arrow</i>";
    music.currentTime = 0;
  });
};

music.onloadeddata = () => {
  seekBar.max = music.duration;
  let ds = parseInt(music.duration % 60);
  let dm = parseInt((music.duration / 60) % 60);
  duration.innerHTML = dm + ":" + ds;
};

music.ontimeupdate = () => {
  seekBar.value = music.currentTime;
};

handleSeekBar = () => {
  music.currentTime = seekBar.value;
};

music.addEventListener(
  "timeupdate",
  () => {
    let cs = parseInt(music.currentTime % 60);
    let cm = parseInt((music.currentTime / 60) % 60);
    currentTime.innerHTML = cm + ":" + cs;
  },
  false
);

// Like
let favIcon = document.querySelector(".favorite");
const handleFavorite = () => {
  favIcon.classList.toggle("active");
};

// Repeat
let repIcon = document.querySelector(".repeat");
const handleRepeat = () => {
  if (music.loop == true) {
    music.loop = false;
    repIcon.classList.toggle("active");
  } else {
    music.loop = true;
    repIcon.classList.toggle("active");
  }
};

// Volume
let volIcon = document.querySelector(".volume");
let volBox = document.querySelector(".volume-box");
let volumeRange = document.querySelector(".volume-range");
let volumeDown = document.querySelector(".volume-down");
let volumeUp = document.querySelector(".volume-up");
const handleVolume = () => {
  volIcon.classList.toggle("active");
  volBox.classList.toggle("active");
};

const handleVolumeDown = () => {
  volumeRange.value = Number(volumeRange.value) - 10;
  music.volume = volumeRange.value / 100;
};

const handleVolumeUp = () => {
  volumeRange.value = Number(volumeRange.value) + 10;
  music.volume = volumeRange.value / 100;
};

volumeDown.addEventListener("click", handleVolumeDown);
volumeUp.addEventListener("click", handleVolumeUp);

window.onload = () => {
  const singerText = document.querySelector(".singer");
  const year = new Date().getFullYear();
  singerText.innerText = `Best Music ${year}`;
};
