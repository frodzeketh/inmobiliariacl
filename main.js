// Funcionalidad de los botones de alternar
const toggleButtons = document.querySelectorAll('.toggle-button');
let selectedType = 'rent';

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedType = button.dataset.type;
    });
});

// Funcionalidad de búsqueda
const searchButton = document.getElementById('searchButton');
const locationSelect = document.getElementById('location'); // Ahora es un input

searchButton.addEventListener('click', () => {
    const selectedLocation = locationSelect.value.trim().toLowerCase().replace(/\s+/g, '-');
    
    if (selectedLocation) {
        const folder = selectedType === 'rent' ? 'arriendo' : 'venta'; // `folder` ahora es const
        const fileSuffix = selectedType === 'rent' ? '' : '-venta';
        
        // Construye la URL de acuerdo a la selección
        const url = `${folder}/${selectedLocation}${fileSuffix}.html`;
        window.location.href = url;
    } else {
        alert('Por favor selecciona una ubicación');
    }
});





























const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.property-card');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (cardWidth + 16)}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        updateCarousel();
    }
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Favorite functionality
const favoriteButtons = document.querySelectorAll('.favorite-btn');
favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = button.textContent === '♡' ? '♥' : '♡';
    });
});
