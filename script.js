const header = document.querySelector('header');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    header.classList.toggle('open');
})

document.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('nav a')) {
        setTimeout(() => {
            header.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }, 300)
        
        sections.forEach((section) => {
          if (href === `#${section.id}`) {
            section.style.paddingTop = '0px';
          }
        });

    }
})

// ---------------------------------------------слайдер-----------------------------------------------------

const swiper = new Swiper('.swiper', {
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        570: {
            navigation: false,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
})