import { initScrollBackground } from "./scroll-background.js";
import { initThemeToggle } from "./theme-toggle.js";
import { initLangToggle } from "./lang-toggle.js";

document.addEventListener("DOMContentLoaded", () => {
    initScrollBackground();
    initThemeToggle();
    initLangToggle();
});
