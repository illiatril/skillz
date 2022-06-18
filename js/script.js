$(document).ready(function(){
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

"use strict"

const responseSwiper = document.querySelector('.swiper-response');

if (responseSwiper){
   const swiper = new Swiper('.swiper-response', {
      // Optional parameters
      loop: true,
   
      // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
      },
   });
}