// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
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
            slidesPerView: 4,
        },
        1930: {
            slidesPerView: 5,
        },
        2000: {
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

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
