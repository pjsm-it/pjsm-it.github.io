export function initThemeToggle() {
    const button = document.getElementById("themeBtn");
    const icon = button.querySelector("img");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        icon.src = "assets/icons/lightbulb-solid-full.svg";
    }

    button.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        if (isDark) {
            icon.src = "assets/icons/lightbulb-solid-full.svg";
            localStorage.setItem("theme", "dark");
        } else {
            icon.src = "assets/icons/lightbulb-regular-full.svg";
            localStorage.setItem("theme", "light");
        }
    });
}
