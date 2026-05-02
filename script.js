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

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on click
    navLinks.classList.toggle('active');
    
    // Optional: Change the bars icon to an 'X' icon
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked (useful for one-page sites)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});