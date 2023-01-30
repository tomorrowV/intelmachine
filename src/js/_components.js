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
const phoneInputs = document.querySelectorAll("input[type='tel']");

const prefixNumber = (str) => {
    if (str === "7") {
        return "7 (";
    }
    if (str === "8") {
        return "7 (";
    }
    if (str === "9") {
        return "7 (9";
    }
    return "7 (";
};
if (phoneInputs.length) {
    phoneInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            const value = input.value.replace(/\D+/g, "");
            const numberLength = 11;
            let result;
            if (input.value.includes("+8") || input.value[0] === "8") {
                result = "+";
            } else {
                result = "+";
            }
            for (let i = 0; i < value.length && i < numberLength; i++) {
                switch (i) {
                    case 0:
                        result += prefixNumber(value[i]);
                        continue;
                    case 4:
                        result += ") ";
                        break;
                    case 7:
                        result += "-";
                        break;
                    case 9:
                        result += "-";
                        break;
                    default:
                        break;
                }
                result += value[i];
            }
            input.value = result;
        });
    });
}

const accordions = document.querySelectorAll(".system__accordion");
if (accordions) {
    accordions.forEach((acc) => {
        acc.addEventListener("click", () => {
            if (acc.classList.contains("active")) return;
            accordions.forEach((acc) => acc.classList.remove("active"));
            acc.classList.add("active");
        });
    });
}

const equipmentSwitchers = document.querySelectorAll(".equipment__switcher");
const equipmentContent = [
    ...document.querySelectorAll(".equipment__card[data-content]"),
];
const equipmentGrid = document.querySelector(".equipment__grid");
if (equipmentSwitchers && equipmentContent) {
    let filteredContent = [];
    const resetLayout = () => (equipmentGrid.innerHTML = "");
    const generateLayout = (arr) =>
        arr.forEach((el) =>
            equipmentGrid.insertAdjacentElement("beforeend", el)
        );

    equipmentSwitchers.forEach((switcher) => {
        switcher.addEventListener("click", () => {
            const sAttr = switcher.dataset?.tab.toLowerCase();
            if (switcher.classList.contains("active")) return;
            if (sAttr === "все") {
                filteredContent.length = 0;
                resetLayout();
                equipmentSwitchers.forEach((t) => removeClass(t, "active"));
                addClass(switcher, "active");
                generateLayout(equipmentContent);
            } else {
                filteredContent.length = 0;
                resetLayout();
                filteredContent = equipmentContent.filter(
                    (content) => content.dataset.content.toLowerCase() === sAttr
                );
                equipmentSwitchers.forEach((p) => removeClass(p, "active"));
                addClass(switcher, "active");
                generateLayout(filteredContent);
            }
        });
    });
}
