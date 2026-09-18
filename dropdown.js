// Navbar Dropdown
// Uses querySelector(), addEventListener(), and classList.toggle()

const dropdownButton = document.querySelector('#dropdownBtn');
const dropdownMenu = document.querySelector('#dropdownMenu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
    dropdownButton.classList.toggle('active');
});

// Bonus: close the dropdown when clicking outside it
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('show');
        dropdownButton.classList.remove('active');
    }
});