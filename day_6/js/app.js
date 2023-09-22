$(document).ready(function(){

    // Header searchbox controller

    let openBTN         =       $('header .header-top .searchbox .open-search');
    let closeBTN        =       $('header .header-top .searchbox .search-input div');
    let searchBox       =       $('header .header-top .searchbox');


    $(openBTN).click(function(){
        $(searchBox).addClass('active');
    })
    $(closeBTN).click(function(){
        $(searchBox).removeClass('active');
    })

    let mobileMenuOpen  =       $('header .open-mobile');
    let mobileMenuClose =       $('.mobile-menu .close-btn');
    let mobileMenu      =       $('.mobile-menu');
    $(mobileMenuOpen).click(function(){
        $(mobileMenu).addClass('active');
    })
    $(mobileMenuClose).click(function(){
        $(mobileMenu).removeClass('active');
    })

    let liveButton  =           $('.live-campaigns .live-button button');
    let pastButton  =           $('.live-campaigns .past-button button');
    let liveContainer  =           $('.live-campaigns .live-container');
    let pastContainer  =           $('.live-campaigns .past-container');

    $(liveButton).click(function(){
        $(liveButton).removeClass('disable-button');
        $(liveButton).addClass('active-button');
        $(pastButton).addClass('disable-button');
        $(liveContainer).removeClass('disable-container');
        $(pastContainer).addClass('disable-container');
    });

    $(pastButton).click(function(){
        $(pastButton).removeClass('disable-button');
        $(pastButton).addClass('active-button');
        $(liveButton).addClass('disable-button');
        $(pastContainer).removeClass('disable-container');
        $(liveContainer).addClass('disable-container');
    });

})

// Hero slider controller

$('.hero-section .slider-area').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $('.announcement .slider-section')
    if (checkWidth < 992) {
      if (typeof owlPost.data('owl.carousel') != 'undefined') {
        owlPost.data('owl.carousel').destroy();
      }
      owlPost.removeClass('owl-carousel');
    } else if (checkWidth > 991) {
        $(owlPost).addClass('owl-carousel');
        $(owlPost).owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
        $( ".announcement .slider-section .owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".announcement .slider-section .owl-next").html('<i class="fa fa-chevron-right"></i>');
    }
  }
  
  postsCarousel();
  $(window).resize(postsCarousel);

