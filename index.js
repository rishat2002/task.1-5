let list = document.querySelector('.brands');
let button_show_more = document.querySelector('.section__show-more');
button_show_more.addEventListener('click', function () {
    if (list.classList.contains('brands--all')) {
        list.classList.remove('brands--all');
        button_show_more.textContent = "Показать все";
    } else {
        list.classList.add('brands--all');
        button_show_more.textContent = "Скрыть";
    }
});

var mySwiper;
const mediaQuery = window.matchMedia('(max-width: 767px)')

function handleTabletChange(e) {
    if (e.matches) {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (typeof mySwiper == 'object') {
        mySwiper.destroy();
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
