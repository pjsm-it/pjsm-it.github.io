document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.closest('.collapsible-card');
            parent.classList.toggle('active');
        });
    });
});
