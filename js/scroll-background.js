export function initScrollBackground() {
    const hero = document.getElementById("hero");
    if (!hero) return;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        const offset = scrollY * 0.3;

        hero.style.backgroundPosition = `center ${offset}px`;
    });
}
