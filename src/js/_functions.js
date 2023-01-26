// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Подключение свайпера
import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper";
Swiper.use([Navigation, Pagination, EffectCoverflow]);
new Swiper(".articles-slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    freeMode: false,
    speed: 1500,
    breakpoints: {
        319: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 3.5,
        },
        1440: {
            slidesPerView: 5,
        },
        1930: {
            slidesPerView: 6,
        },
    },
});

new Swiper(".watch-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: false,
    speed: 1500,
    breakpoints: {
        319: {
            slidesPerView: 1.1,
        },
        525: {
            slidesPerView: 1.5,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3.5,
        },
        1100: {
            slidesPerView: 3.7,
        },
        1260: {
            slidesPerView: 4,
        },
        1650: {
            slidesPerView: 4.5,
        },
        1930: {
            slidesPerView: 6,
        },
        2100: {
            slidesPerView: 7,
        },
    },
});

new Swiper(".projects-section-slider", {
    slidesPerView: 1.4,
    spaceBetween: 16,
    freeMode: false,
    speed: 1500,
    breakpoints: {
        319: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1.2,
        },
        1100: {
            slidesPerView: 1.5,
        },
        1440: {
            slidesPerView: 2,
        },
        1650: {
            slidesPerView: 2.1,
        },
        1930: {
            slidesPerView: 2.3,
        },
    },
});
new Swiper(".projects-card__slider", {
    nested: true,
    slidesPerView: 1,
    speed: 1500,
    effect: "coverflow",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

new Swiper(".history-slider", {
    slidesPerView: 2.5,
    speed: 1500,
    spaceBetween: 16,
    breakpoints: {
        319: {
            slidesPerView: 1.05,
        },
        576: {
            slidesPerView: 1.5,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
        1650: {
            slidesPerView: 4,
        },
        1930: {
            slidesPerView: 5,
        },
    },
});
new Swiper(".module-item-slider", {
    nested: true,
    slidesPerView: 1,
    speed: 1500,
    effect: "coverflow",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

new Swiper(".branch-slider", {
    slidesPerView: 1,
    speed: 1500,
    effect: "coverflow",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

import { createPopper } from "@popperjs/core";

const systemTipTrigger = document.querySelectorAll(".tooltip-system__trigger");
const systemTooltips = document.querySelectorAll(".tooltip-system__info");
if (systemTipTrigger) {
    systemTipTrigger.forEach((trigger, index) => {
        createPopper(trigger, systemTooltips[index], {
            placement: "top-end",
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, -25],
                    },
                },
            ],
        });
    });
}

const accTooltipTriggers = document.querySelectorAll(".panel .tooltip");
const accordionsTooptips = document.querySelectorAll(".tooltip__content");
if (accTooltipTriggers && accordionsTooptips) {
    accTooltipTriggers.forEach((trigger, index) => {
        createPopper(trigger, accordionsTooptips[index], {
            placement: "bottom-end",
        });
    });
}
