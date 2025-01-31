var swiper1 = new Swiper(".poster", {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed : 6000,
    slidesPerView: 4,
    spaceBetween: 30,

});

$(function(){
    $('.poster').hover(function(){
        swiper1.autoplay.stop();
      }, function(){
        swiper1.autoplay.start();
      });
})
