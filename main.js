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
