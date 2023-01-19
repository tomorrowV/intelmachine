const addClass = (elem, className) => elem.classList.add(className);
const removeClass = (elem, className) => elem.classList.remove(className);
const toggleClass = (elem, className) => elem.classList.toggle(className);

const header = document.querySelector(".header");
if (header) {
    const top = window.scrollY;
    if (top > 50) {
        addClass(header, "scroll");
    } else {
        removeClass(header, "scroll");
    }
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top > 150) {
            addClass(header, "scroll");
        } else {
            removeClass(header, "scroll");
        }
    });
}

const menu = document.querySelector(".header__content");
const triggerMenu = document.querySelector(".burger");
const headerLogo = document.querySelector(".header__logo");

if (menu) {
    const elements = [menu, triggerMenu, headerLogo];
    triggerMenu.addEventListener("click", (e) => {
        e.preventDefault();
        elements.forEach((el) => toggleClass(el, "active"));
    });
}
