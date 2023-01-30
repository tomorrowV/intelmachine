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
                const borderClient = border.getBoundingClientRect();
                const bWidth = Math.round(border.getBoundingClientRect().width);
                const borderWidth =
                    window.getComputedStyle(border).borderBottomWidth;
                const borderColor =
                    window.getComputedStyle(border).borderBottomColor;

                border.setAttribute("border-width", bWidth);
                const span = document.getElementById(borderHorizonId);
                span.style.cssText = `
                        opacity: 1;
                        position: absolute;
                        left: borderClient.left;
                        top: ${border.offsetTop - 1 + borderClient.height}px;
                        width: ${borderClient.width}px;
                        height: ${borderWidth};
                        background-color:
                            red;

                `;
            }
        }
    });
}

// searchBorder();

// animation on scroll

gsap.registerPlugin(ScrollTrigger);

const tlChoose = gsap.timeline();

gsap.from(".hero-main__video", {
    scrollTrigger: {
        trigger: ".hero",
        start: "0 center",
        end: "+=250",
    },
    autAlpa: 0,
    y: -350,
    stagger: 1,
    duration: 1.5,
    ease: "power2.inOut",
    css: {
        width: 0,
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const animations = [
        ...document.querySelectorAll(".animation-block"),
        ...document.querySelectorAll(".btn-animation"),
    ];
    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                setTimeout(() => {
                    entry.target.classList.remove("animation-block");
                    entry.target.removeAttribute("data-duration");
                    entry.target.removeAttribute("data-delay");
                }, 3000);
            }
        });
    };
    const observer = new IntersectionObserver(callback);

    animations.forEach((item) => observer.observe(item));
});
