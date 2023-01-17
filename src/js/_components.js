const addClass = (elem, className) => elem.classList.add(className);
const removeClass = (elem, className) => elem.classList.remove(className);

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
