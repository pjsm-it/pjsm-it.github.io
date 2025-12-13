document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.parentElement;
            parent.classList.toggle('active');
        });
    });
});
