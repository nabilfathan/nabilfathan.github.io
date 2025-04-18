
// JavaScript untuk menambahkan kelas 'visible' saat elemen muncul di viewport
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Menghapus kelas jika tidak terlihat
            }
        });
    }

    // Cek visibilitas saat scroll dan saat halaman dimuat
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Panggil fungsi saat halaman dimuat
});

// JavaScript untuk menambahkan kelas 'visible' saat elemen muncul di viewport
document.addEventListener('DOMContentLoaded', function() {
    const popElements = document.querySelectorAll('.pop');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        popElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Menghapus kelas jika tidak terlihat
            }
        });
    }

    // Cek visibilitas saat scroll dan saat halaman dimuat
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Panggil fungsi saat halaman dimuat
});
  // JavaScript untuk menambahkan kelas 'visible' saat elemen muncul di viewport
  document.addEventListener('DOMContentLoaded', function() {
    const slideElements = document.querySelectorAll('.slide');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        slideElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Menghapus kelas jika tidak terlihat
            }
        });
    }

    // Cek visibilitas saat scroll dan saat halaman dimuat
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Panggil fungsi saat halaman dimuat
});

        // script.js. ngetikan animasi
    const typingText = document.getElementById('typingText');
    const textToType = "Selamat datang di animasi typing tergantung scroll!"; // Teks yang ingin ditampilkan
    typingText.textContent = ''; // Kosongkan teks untuk efek typing
    let isTyping = false;
    let currentIndex = 0; // Indeks karakter saat ini
    
    const typeText = () => {
        if (currentIndex < textToType.length) {
            typingText.textContent += textToType.charAt(currentIndex); // Tambahkan karakter satu per satu
            currentIndex++;
            setTimeout(typeText, 100); // Ubah kecepatan typing di sini
        }
    };
    
    const deleteText = () => {
        if (currentIndex > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1); // Hapus karakter satu per satu
            currentIndex--;
            setTimeout(deleteText, 100); // Ubah kecepatan penghapusan di sini
        }
    };
    
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPoint = 20; // Ubah sesuai kebutuhan
    
        if (scrollPosition > triggerPoint && !isTyping) {
            isTyping = true; // Set isTyping ke true untuk mencegah pemicu ganda
            typeText(); // Mulai mengetik
        } else if (scrollPosition < triggerPoint && isTyping) {
            isTyping = false; // Set isTyping ke false untuk mencegah pemicu ganda
            deleteText(); // Mulai menghapus
        }
    };
    
    window.addEventListener('scroll', handleScroll);

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuVisible = false;

    menuToggle.addEventListener('click', () => {
        // Toggle the visibility of the mobile menu
        if (menuVisible) {
            mobileMenu.classList.add('hidden');  // Hide the mobile menu
        } else {
            mobileMenu.classList.remove('hidden');  // Show the mobile menu
        }
        menuVisible = !menuVisible;
    });

    // MP3 Player
const audioMP3 = document.getElementById('audioMP3');
const playPauseMP3 = document.getElementById('playPauseMP3');
const playPauseIconMP3 = document.getElementById('playPauseIconMP3');
const progressMP3 = document.getElementById('audioProgressMP3');

if (audioMP3 && playPauseMP3) {
  playPauseMP3.addEventListener('click', function () {
    if (audioMP3.paused) {
      audioMP3.play();
      playPauseIconMP3.textContent = '⏸';
    } else {
      audioMP3.pause();
      playPauseIconMP3.textContent = '▶';
    }
  });

  audioMP3.addEventListener('timeupdate', function () {
    const progress = (audioMP3.currentTime / audioMP3.duration) * 100;
    progressMP3.value = progress;
  });

  progressMP3.addEventListener('input', function () {
    const seekTime = (progressMP3.value / 100) * audioMP3.duration;
    audioMP3.currentTime = seekTime;
  });
}

function setupAudioPlayer(audioId, playButtonId, progressId, iconId) {
    const audio = document.getElementById(audioId);
    const playButton = document.getElementById(playButtonId);
    const progress = document.getElementById(progressId);
    const playIcon = document.getElementById(iconId);

    playButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playIcon.textContent = '❚❚'; // Ganti dengan ikon pause
      } else {
        audio.pause();
        playIcon.textContent = '▶'; // Ganti dengan ikon play
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

  // Setup untuk setiap format audio
  setupAudioPlayer('audioMP3', 'playPauseMP3', 'audioProgressMP3', 'playPauseIconMP3');
  setupAudioPlayer('audioWAV', 'playPauseWAV', 'audioProgressWAV', 'playPauseIconWAV');
  setupAudioPlayer('audioAAC', 'playPauseAAC', 'audioProgressAAC', 'playPauseIconAAC');
  // Tambahkan setup lainnya sesuai format audio yang Anda punya

// navbar.js
    document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    if (menuToggle && menu) {
      menuToggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  });
  

//floating button
const audio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("audio-toggle");

  let isPlaying = false;

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