export const addClass = (elem, className) => elem.classList.add(className);
export const removeClass = (elem, className) =>
    elem.classList.remove(className);
export const toggleClass = (elem, className) =>
    elem.classList.toggle(className);

export const tabFunc = (tabsParent, tab, tabContent) => {
    const parent = document.querySelector(tabsParent);
    const contents = document.querySelectorAll(tabContent);
    console.log(parent, contents);
    if (tabsParent && tabContent) {
        parent.addEventListener("click", (e) => {
            const target = e.target;
            const attr = target.closest(tab)?.dataset.tab.trim().toLowerCase();

            if (!target.closest(tab)) return;

            tabContent.forEach(t);
        });
    }
};
