import "./_functions";
import "./_components";

setTimeout(() => {
    document.getElementById("preloader")?.remove();
}, 500);

function searchBorder() {
    const borders = document.querySelectorAll("[data-border]");
    borders.forEach((border) => {
        const borderHorizonAttr = border.getAttribute("border-horizon-id");
        const borderVericalAttr = border.getAttribute("border-vertical-id");
        let borderHorizonId =
            borderHorizonAttr !== null ? borderHorizonAttr : false;
        let borderVerticalId =
            borderVericalAttr !== null ? borderVericalAttr : false;
        if (border.style.display !== "none") {
            if (borderHorizonId) {
                const bWidth = Math.round(border.getBoundingClientRect().width);
                border.setAttribute("border-width", bWidth);
                const span = document.getElementById(borderHorizonId);
                span.style.cssText = `
                    left: ${span.offsetLeft};
                    top: ${
                        span.style.borderTopStyle === "solid"
                            ? span.offsetLeft
                            : span.offsetTop +
                              span.getBoundingClientRect().height -
                              1
                    };
                    width: ${span.getBoundingClientRect().width}
                `;
            }
        }
    });
}

searchBorder();
