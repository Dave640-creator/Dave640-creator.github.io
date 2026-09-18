// Navbar Dropdown(s)
// Works for any number of independent dropdowns on the page.
// Each one is selected with querySelector/querySelectorAll, opened/closed
// with classList.toggle(), and reacts to its own click event.

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdown-btn');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', (event) => {
        // Don't let this bubble up and immediately trigger the
        // "click outside" listener below.
        event.stopPropagation();

        // Close any other open dropdown first, so only one is open
        // at a time while each still works independently.
        dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector('.dropdown-menu').classList.remove('show');
                const otherButton = otherDropdown.querySelector('.dropdown-btn');
                otherButton.classList.remove('active');
                otherButton.setAttribute('aria-expanded', 'false');
            }
        });

        const isOpen = dropdownMenu.classList.toggle('show');
        dropdownButton.classList.toggle('active', isOpen);
        dropdownButton.setAttribute('aria-expanded', String(isOpen));
    });
});

// Bonus: close whichever dropdown is open when clicking outside of it.
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        dropdowns.forEach((dropdown) => {
            dropdown.querySelector('.dropdown-menu').classList.remove('show');
            const button = dropdown.querySelector('.dropdown-btn');
            button.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
        });
    }
});