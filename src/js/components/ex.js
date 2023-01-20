export const addClass = (elem, className) => elem.classList.add(className);
export const removeClass = (elem, className) =>
    elem.classList.remove(className);
export const toggleClass = (elem, className) =>
    elem.classList.toggle(className);

export const tabFunc = (tabsParent, tab, tabsContent) => {
    const parent = document.querySelector(tabsParent);
    const contents = document.querySelectorAll(tabsContent);
    const tabs = document.querySelectorAll(tab);

    if (parent && contents) {
        parent.addEventListener("click", (e) => {
            const target = e.target;
            const attr = target.closest(tab)?.dataset.tab.trim().toLowerCase();

            if (!target.closest(tab)) return;

            tabs.forEach((t) => removeClass(t, "active"));
            contents.forEach((t) => removeClass(t, "show"));
            addClass(target, "active");
            contents.forEach((content) => {
                const contentAttr = content.dataset.tabContent
                    .trim()
                    .toLowerCase();
                if (contentAttr === attr) {
                    addClass(content, "show");
                }
            });
        });
    }
};
