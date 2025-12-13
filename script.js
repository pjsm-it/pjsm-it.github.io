document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.closest('.collapsible-card');
            parent.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.getElementById('back-to-top');

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
