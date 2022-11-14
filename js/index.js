var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {

      300: {
        slidesPerView: 2,
        spaceBetween: 180,
        slidesPerGroup: 3,
      },
      351: {
        slidesPerView: 2,
        spaceBetween: 150,
        slidesPerGroup: 3,
      },
      474: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 3,
      },
      520: {
        slidesPerView: 3,
        spaceBetween: 220,
        slidesPerGroup: 3,
      },
      610: {
        slidesPerView: 3,
        spaceBetween: 170,
        slidesPerGroup: 3,
      },
      712: {
        slidesPerView: 3,
        spaceBetween: 80,
        slidesPerGroup: 3,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      
    }
  });
  

  var swiper = new Swiper(".BannerSwiper", {
    
    loop: true,
    allowTouchMove: true,   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: false,
    keyboard: true,
  });

  function app(){
    type:"less"
  }