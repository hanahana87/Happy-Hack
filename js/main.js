$(function($){
  
    $('.bg-swicher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
    });

    $('.slider').slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    });

      

    $('.fuwat').css('visibility', 'hidden');
    $(window).scroll(function() {
      var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
      $('.fuwat').each(function() {
        var objectPosition = $(this).offset().top;
        if (topWindow > objectPosition - windowHeight + 200) {
          $(this).addClass("fuwatinAnime");
        }
      }); 
    });  



    $('nav a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed,'swing');
        return false;
    });

    particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              },
              "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
              }
          },
          "opacity": {
              "value": 1,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": false,
                  "mode": "repulse"
              },
              "onclick": {
                  "enable": false,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
    })

    jQuery(function($) {

      $('.fuwat').css('visibility', 'hidden');
      $(window).scroll(function() {
        var windowHeight = $(window).height(),
          topWindow = $(window).scrollTop();
        $('.fuwat').each(function() {
          var objectPosition = $(this).offset().top;
          if (topWindow > objectPosition - windowHeight + 200) {
            $(this).addClass("fuwatAnime");
          }
        });
      });
  });
  });
