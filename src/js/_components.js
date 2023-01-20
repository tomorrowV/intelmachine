import { tabFunc, addClass, removeClass, toggleClass } from "./components/ex";

tabFunc(
    ".configurations__tabs",
    ".configurations__tab",
    ".configurations-content"
);

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

const modalTriggers = document.querySelectorAll("*[data-modal]");
const modals = document.querySelectorAll(".modal");
const thanksModals = document.querySelectorAll(".thanks-modal");
const forms = document.querySelectorAll("form");
if (modalTriggers && modals) {
    modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const attr = trigger.dataset.modal;
            document.getElementById(attr).classList.add("show");
        });
    });

    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll("input");
            const textAreas = form.querySelector("textarea");
            inputs.forEach((input) => {
                if (input.getAttribute("type") === "email") {
                    modals.forEach((t) => removeClass(t, "show"));
                    inputs.forEach((i) => (i.value = ""));
                    setTimeout(() => {
                        addClass(thanksModals[0], "show");
                    }, 100);
                    setTimeout(() => {
                        removeClass(thanksModals[0], "show");
                    }, 1500);
                }
                if (!input.checked) {
                    return;
                } else {
                    modals.forEach((t) => removeClass(t, "show"));
                    inputs.forEach((i) => (i.value = ""));
                    if (textAreas) textAreas.value = "";
                    setTimeout(() => {
                        addClass(thanksModals[0], "show");
                    }, 100);
                    setTimeout(() => {
                        removeClass(thanksModals[0], "show");
                    }, 1500);
                }
            });
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            const target = e.target;
            const conditions =
                !target.closest(".modal-form") ||
                target.closest(".modal-close  > svg");

            if (conditions) {
                removeClass(modal, "show");
            }
        });
    });
}
