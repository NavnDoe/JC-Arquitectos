$(window).on("load", function () {
   // Preload
   $("#preload").fadeOut(500);
});


jQuery(document).ready(function () {

   // Our Skills
   $("#single-skills-1").radialProgress("init", {
      'size': 100,
      'fill': 10,
      'font-size': 30,
      "color": "#5bc86d",
      "background": "#f8f8f8"
   }).radialProgress("to", {
      'perc': 100,
      'time': 8000
   });

   $("#single-skills-2").radialProgress("init", {
      'size': 100,
      'fill': 10,
      'font-size': 30,
      "color": "#5bc86d",
      "background": "#f8f8f8"
   }).radialProgress("to", {
      'perc': 90,
      'time': 8000
   });

   $("#single-skills-3").radialProgress("init", {
      'size': 100,
      'fill': 10,
      'font-size': 30,
      "color": "#5bc86d",
      "background": "#f8f8f8"
   }).radialProgress("to", {
      'perc': 80,
      'time': 8000
   });

   $("#single-skills-4").radialProgress("init", {
      'size': 100,
      'fill': 10,
      'font-size': 30,
      "color": "#5bc86d",
      "background": "#f8f8f8"
   }).radialProgress("to", {
      'perc': 50,
      'time': 8000
   });


   // Isotope Portfolio
   var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
   });


   $('.filter button').on('click', function () {

      var value = $(this).attr('data-name');
      $grid.isotope({
         filter: value
      });

   });

   $('.filter button').click(function () {
      $('.filter button').removeClass('active-portfolio');
      $(this).addClass('active-portfolio');
   });

   // Magnific Popup Portfolio
   $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function (item) {
            return item.el.attr('title') + '<small></small>';
         }
      }
   });

   // Counter
   $('.counter').counterUp({
      delay: 10,
      time: 1100,
   });

   // Owl Carousel Team
   $('.team-carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 4
         }
      }
   });

   // Owl Carousel Testimonials
   $('.testimonials-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 2
         }
      }
   });

   // Scroll Top Button
   $('#scroll-top').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   // Scroll Top
   $('#scroll-top').hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('#scroll-top').fadeIn();
      } else {
         $('#scroll-top').fadeOut();
      }
   });

   // Scroll Fixed Menu
   $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
         $('#header').addClass('bg-fixed');
      } else {
         $('#header').removeClass('bg-fixed');
      }
   });

   // Scroll Menu
   $(".menu li").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });
   $("#logo").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   // Mobile Menu
   $('#openmenu').click(function (event) {
      event.preventDefault();
      $('#navigation').animate({
         'left': 0
      }, 800);
   });

   $('#closemenu').click(function (event) {
      event.preventDefault();
      $('#navigation').animate({
         'left': '-320px'
      }, 800);
   });

   $('#navigation a').on("click", function () {
      $("#navigation").animate({
         'left': '-320px'
      }, 800);
   });

   // Contact Form Ajax 
   $('#send').click(function (event) {
      event.preventDefault();

      var name = $('input[name="name"]').val();
      var lastname = $('input[name="lastname"]').val();
      var phone = $('input[name="phone"]').val();
      var email = $('input[name="email"]').val();
      var message = $('textarea[name="message"]').val();

      if (name == '' || lastname == '' || phone == '' || email == '' || message == '') {

         $('.res-send').fadeIn().html('<span class="error">All fields must be filled.</span>');
         $('input, textarea').focus(function () {
            $('.res-send').fadeOut();
         });

      } else {

         $.ajax({
            url: '../contact.php',
            type: 'POST',
            data: {
               name: name,
               lastname: lastname,
               phone: phone,
               email: email,
               message: message
            },
            dataType: 'html',
            success: function (data) {
               if (data == 'Send') {

                  $('.res-send').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');

                  $('input[name="name"]').val('');
                  $('input[name="lastname"]').val('');
                  $('input[name="phone"]').val('');
                  $('input[name="email"]').val('');
                  $('textarea[name="message"]').val('');

                  $('input, textarea').focus(function () {
                     $('.res-send').fadeOut();
                  });

               }
            }
         }); // ajax
      }
   });


}); // ready