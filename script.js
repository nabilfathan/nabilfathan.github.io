
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