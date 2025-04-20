// script.js - Final versi rapi

// scroll to link 
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Cek visibilitas elemen (fade, pop, slide)
document.addEventListener('DOMContentLoaded', function () {
  const fadeElements = document.querySelectorAll('.fade');
  const popElements = document.querySelectorAll('.pop');
  const slideElements = document.querySelectorAll('.slide');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    [...fadeElements, ...popElements, ...slideElements].forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Inisialisasi saat halaman dimuat

  // Navbar Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});

// Efek typing tergantung scroll
document.addEventListener('DOMContentLoaded', function () {
  const typingText = document.getElementById('typingText');
  if (!typingText) return;

  const textToType = "Selamat datang di animasi typing tergantung scroll!";
  typingText.textContent = '';
  let isTyping = false;
  let currentIndex = 0;

  const typeText = () => {
    if (currentIndex < textToType.length) {
      typingText.textContent += textToType.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeText, 100);
    }
  };

  const deleteText = () => {
    if (currentIndex > 0) {
      typingText.textContent = typingText.textContent.slice(0, -1);
      currentIndex--;
      setTimeout(deleteText, 100);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = 20;

    if (scrollPosition > triggerPoint && !isTyping) {
      isTyping = true;
      typeText();
    } else if (scrollPosition < triggerPoint && isTyping) {
      isTyping = false;
      deleteText();
    }
  };

  window.addEventListener('scroll', handleScroll);
});

// Audio Player Universal
function setupAudioPlayer(audioId, playButtonId, progressId, iconId) {
  const audio = document.getElementById(audioId);
  const playButton = document.getElementById(playButtonId);
  const progress = document.getElementById(progressId);
  const playIcon = document.getElementById(iconId);

  if (!audio || !playButton || !progress || !playIcon) return;

  playButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playIcon.textContent = '❚❚';
    } else {
      audio.pause();
      playIcon.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progress.value = progressValue;
  });

  progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });
}

// Contoh setup beberapa audio
setupAudioPlayer('audioMP3', 'playPauseMP3', 'audioProgressMP3', 'playPauseIconMP3');
setupAudioPlayer('audioWAV', 'playPauseWAV', 'audioProgressWAV', 'playPauseIconWAV');
setupAudioPlayer('audioAAC', 'playPauseAAC', 'audioProgressAAC', 'playPauseIconAAC');

// Floating button audio
const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("audio-toggle");
let isPlaying = false;

if (audio && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      toggleBtn.textContent = "▶️";
    } else {
      audio.play();
      toggleBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
  });
}

// scroll triggerd animation 
document.addEventListener('DOMContentLoaded', function () {
  const scrollTriggeredElements = document.querySelectorAll('.scroll-trigger');

  function handleScrollTriggered() {
      const windowHeight = window.innerHeight;

      scrollTriggeredElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight * 0.9) {
              el.classList.add('visible');
          } else {
              el.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', handleScrollTriggered);
  handleScrollTriggered(); // Panggil saat halaman dimuat
});

// pop priview
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const popupMedia = document.getElementById('popupMedia');

document.querySelectorAll('.popup-trigger').forEach(el => {
  el.addEventListener('click', () => {
    popupTitle.textContent = el.dataset.title;
    popupDesc.textContent = el.dataset.desc;
    popupMedia.innerHTML = el.dataset.media;
    popup.classList.remove('hidden');
    popup.classList.add('flex', 'show');
    document.body.classList.add('noscroll');
  });
});

function stopVideos() {
  const videos = popup.querySelectorAll('video');
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
}

function hidePopup() {
  popup.classList.remove('show');
  stopVideos();
  document.body.classList.remove('noscroll');
  setTimeout(() => {
    popup.classList.add('hidden');
    popup.classList.remove('flex');
    popupMedia.innerHTML = '';
  }, 300);
}

closePopup.addEventListener('click', hidePopup);
popup.addEventListener('click', (e) => {
  if (e.target === popup) hidePopup();
});