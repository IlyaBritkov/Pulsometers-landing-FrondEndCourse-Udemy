
$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/watchs_carousel/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/watchs_carousel/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows:false
              }
            }
          ]
    });
  });