var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    preloadImages : false,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: ".mySwiper-next",
      prevEl: ".mySwiper-prev",
    },
    lazy :{
      loadPrevNext: true,
    },   
    breakpoints: {

      300: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      351: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      474: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 1,
      },
      520: {
        slidesPerView: 3,
        spaceBetween: 220,
        slidesPerGroup: 1,
      },
      610: {
        slidesPerView: 3,
        spaceBetween: 170,
        slidesPerGroup: 1,
      },
      712: {
        slidesPerView: 3,
        spaceBetween: 80,
        slidesPerGroup: 1,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
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
  $(document).ready(function(){
    $('li.tripleSelect').on('mouseenter',function(){
      var triplename = $(this).attr('triple-name');
      $('.selectBol[triple-name*="'+triplename+'"]').show();
    })
    $('li.tripleSelect').on('mouseleave',function(){
      $('.selectBol').hide();  
    });
  })
    
