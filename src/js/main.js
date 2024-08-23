document.addEventListener('DOMContentLoaded', function () {
    for (const track of document.querySelectorAll('.bar')) {
        const logos = track.innerHTML;
        track.innerHTML += logos; // Дублируем логотипы
    }
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
});
