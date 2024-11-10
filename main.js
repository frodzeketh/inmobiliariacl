// Toggle button functionality
const toggleButtons = document.querySelectorAll('.toggle-button');
let selectedType = 'rent';

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedType = button.dataset.type;
    });
});

// Search functionality
const searchButton = document.getElementById('searchButton');
const locationSelect = document.getElementById('location');

searchButton.addEventListener('click', () => {
    const selectedLocation = locationSelect.value;
    
    if (selectedLocation) {
        // Construct the URL based on selection
        const url = `pages/sitios/${selectedLocation}.html?type=${selectedType}`;
        window.location.href = url;
    } else {
        alert('Por favor selecciona una ubicación');
    }
});
