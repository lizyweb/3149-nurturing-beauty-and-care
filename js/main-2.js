document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Vendor carousel
$('.vendor-carousel').owlCarousel({
  loop: true,
  margin: 45,
  dots: false,
  center: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, 
//   autoplayHoverPause: true,
  autoplaySpeed: 1000,
  smartSpeed: 1000,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:2
      },
      768:{
          items:2
      },
      992:{
          items:2
      }
  }
});

$('.product-carousel').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, 
//   autoplayHoverPause: true,
  autoplaySpeed: 1000,
  smartSpeed: 1000,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:3
      },
      992:{
          items:3
      }
  }
});

  window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page when navigated back to
    }
  };

});