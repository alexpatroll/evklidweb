var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  parallax: true,
  loop: true,

  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    //буллеты
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})
