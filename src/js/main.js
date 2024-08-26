document.addEventListener('DOMContentLoaded', function () {
    for (const track of document.querySelectorAll('.bar')) {
        const logos = track.innerHTML;
        track.innerHTML += logos; // Дублируем логотипы
    }
    if (window.innerWidth > 1000) {
        $('.cases__slider').slick({
            centerMode: true,
            centerPadding: '285px',
            slidesToShow: 1,
            infinite: false,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        // arrows: false,
                        centerMode: true,
                        centerPadding: '117px',
                        slidesToShow: 1,
                        infinite: false,
                        initialSlide: 1,
                    },
                },
                //     {
                //         breakpoint: 480,
                //         settings: {
                //             arrows: false,
                //             centerMode: true,
                //             centerPadding: '40px',
                //             slidesToShow: 1,
                //         },
                //     },
            ],
        });
    }
    document.querySelector('.header__button').addEventListener('click', () => {
        document.querySelector('.header__button').classList.toggle('header__button--active');
        document.querySelector('.header__nav').classList.toggle('nav--active');
        if (window.innerWidth <= 620) {
            if (document.querySelector('.header__nav').classList.contains('nav--active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });

    for (const modalBtnOpen of document.querySelectorAll('.modal-open')) {
        modalBtnOpen.addEventListener('click', () => {
            document.querySelector('.modal').classList.add('modal--active');
            document.querySelector('.modal-overlay').classList.add('modal-overlay--active');
            document.body.style.overflow = 'hidden';
        });
    }
    document.querySelector('.modal-close').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.modal').classList.remove('modal--active');
        document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
        document.body.style.overflow = '';
    });
    $('form').each(function () {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                file: 'required',
                event: 'required',
            },
            messages: {
                name: {
                    required: '*Обязательное поле',
                    minlength: 'ФИО должно быть не менее 2 символов',
                },
                phone: {
                    required: '*Обязательное поле',
                },
                email: {
                    required: '*Обязательное поле',
                    email: 'Введите корректный email',
                },
                file: '*Обязательное поле',
                event: '*Обязательное поле',
            },
        });
        $(this).find('[name="phone"]').mask('+7(000)-000-00-00');
    });
});
