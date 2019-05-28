


$('.main__slider').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    asNavFor: '.main__slider2',
    prevArrow: '.next_slide',
    nextArrow: '.prev_slide',
    responsive: [{
        breakpoint: 1330,
        settings: {
            dots: true
        }
    }]
});

$('.main__slider2').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    asNavFor: '.main__slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});


$('.slider_product_new').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    prevArrow: '.left_button',
    nextArrow: '.right_button',
    responsive: [{
            breakpoint: 1330,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

    ]
});


$('.slider_product_hits').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    prevArrow: '.left_two_button',
    nextArrow: '.right_two_button',
    responsive: [{
            breakpoint: 1330,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true

            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }


    ]
});


$('.slider_image_product').slick({
    dots: false,
    infinite: false,
    draggable: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
});

if (window.innerWidth <= 1330) {
    $('.gray_container_icons .container_icons').slick({
        responsive: [{
                breakpoint: 1330,
                settings: {
                    dots: true,
                    infinite: false,
                    draggable: false,
                    speed: 1500,
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 6,
                    arrows: false,
                    dots: true
                }
            }
        ]

    });
}

if (window.innerWidth <= 1330) {
    $('.image_container_items').slick({
        responsive: [{
                breakpoint: 1330,
                settings: {
                    dots: true,
                    speed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]

    });
}

