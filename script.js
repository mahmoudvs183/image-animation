let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicatorContainer = document.querySelector('.indicator-container');
let autoSlideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.classList.remove('inactive');
        } else {
            slide.classList.add('inactive');
            slide.classList.remove('active');
        }
    });

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    resetAutoSlide(); // Reset auto-slide timer on manual interaction
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
    resetAutoSlide(); // Reset auto-slide timer on manual interaction
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function createIndicators() {
    for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        const thumbnail = document.createElement('img');
        thumbnail.src = slides[i].querySelector('img').src; // Use the slide's image as a thumbnail
        indicator.appendChild(thumbnail);
        indicator.addEventListener('click', () => {
            slideIndex = i;
            showSlide(slideIndex);
            resetAutoSlide(); // Reset auto-slide timer on manual interaction
        });
        indicatorContainer.appendChild(indicator);
    }
}

// Initialize first slide and start auto-slide
showSlide(slideIndex);
startAutoSlide();
createIndicators(); // Create indicators after initializing slides
