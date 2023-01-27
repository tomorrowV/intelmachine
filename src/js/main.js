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

// searchBorder();

// animation on scroll

gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

// revealContainers.forEach((container) => {
//     let image = container.querySelector(".reveal-image");

//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             toggleActions: "restart none none reset",
//         },
//     });

//     tl.set(container, { autoAlpha: 1, duration: 2 });
//     tl.from(container, 1, {
//         xPercent: image.classList.contains("reveal-image-left") ? -100 : 100,
//         ease: Power4.inOut,
//     });
//     tl.from(image, 1, {
//         xPercent: image.classList.contains("reveal-image-left") ? 100 : -100,

//         ease: Power4.inOut,
//     });
// });

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
    const animations = document.querySelectorAll(".animation-block");
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
