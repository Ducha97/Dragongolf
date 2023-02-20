jQuery(document).ready(function () {
    if (jQuery('.hp-mslide__inner').length) {
        jQuery(".hp-mslide__inner").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
        });
    }
    if (jQuery('.hbh-slide').length) {
        jQuery(".hbh-slide").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            centerMode: false,
            variableWidth: true,
            swipeToSlide: true,
            infinite: true,
            draggable: true,
            accessibility: false,
            prevArrow: '<button class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i></button>',
			nextArrow: '<button class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i></button>',
        });
    }
});