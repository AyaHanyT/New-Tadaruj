!(function($) {
  "use strict";

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('far fa-times');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('far fa-times');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.getElementById("header").classList.add("sticky-navbar");
    //  $('#navbar .w-100').addClass('container');
    } else {
      document.getElementById("header").classList.remove("sticky-navbar")
    //  $('#navbar .w-100').removeClass('container');
    }
  })
})



$('.partners-carousel').owlCarousel({
  loop: true,
  rtl:true,
  margin: 10,
  nav: false,
  dots : false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplaySpeed: 3000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    }
  }
})


$('.branding-carousel').owlCarousel({
  rtl:true,
  margin:0,
  nav:true,
  loop:true,
  singleItem: true,
  items:1,
  dots : true,
  autoplay:true,
  autoplayHoverPause:true,
  autoplayTimeout:3000,
  autoplaySpeed: 1000,
  navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"]
})

$('.feedback-carousel').owlCarousel({
  rtl:true,
  margin:0,
  nav:false,
  loop:true,
  singleItem: true,
  items:1,
  dots : false,
  autoplay:true,
  autoplayHoverPause:true,
  autoplayTimeout:3000,
  autoplaySpeed: 1000,
  navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"]
})


  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  