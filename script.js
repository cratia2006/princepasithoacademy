const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    // 1. Remove active class from current image
    slides[currentIndex].classList.remove('active');
    
    // 2. Move to next index
    currentIndex = (currentIndex + 1) % slides.length;
    
    // 3. Add active class to the new image
    slides[currentIndex].classList.add('active');
}

// Start the first slide immediately
slides[0].classList.add('active');

// Change every 5 seconds
setInterval(nextSlide, 5000);