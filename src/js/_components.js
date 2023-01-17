const addClass = (elem, className) => elem.classList.add(className);
const removeClass = (elem, className) => elem.classList.remove(className);

const headerMain = document.querySelector(".main-header");
if (headerMain) {
    const top = window.scrollY;
    if (top > 150) {
        addClass(headerMain, "scroll");
    } else {
        removeClass(headerMain, "scroll");
    }
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top > 150) {
            addClass(headerMain, "scroll");
        } else {
            removeClass(headerMain, "scroll");
        }
    });
}
