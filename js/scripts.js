

 // get instagram feed
$(window).on("load",function(e){
    var instaurl = 'https://api.instagram.com/v1/users/331110964/media/recent/?access_token=331110964.1677ed0.1bc4e07a0f72439484e74bac4f7508b8&callback=?';
     $.ajax({
        url: instaurl,
        dataType: "jsonp",
        success: function (response) {
          setTimeout(function(){
          $.each(response.data, function(i, item) {
              if($(window).width() >= 767){
                 if(i>4) return false;
              }else{
                if(i>3) return false;
              }

              $('<li><a href="'+item.link+'" target="_blank"><figure style="background-image:url('+item.images.standard_resolution.url+');"> </figure></a></li>').appendTo('.instafeed');
              //$('.t-feeds').find('.photolist'+i).html('<a href="'+item.link+'" target="_blank"><img src="'+item.images.standard_resolution.url+'" class="img-respond"/><span class="insta-icon"><img src="/images/gates/location/instagram.png" alt=""/></span><div class="insta-overlay"><div class="overlay-con"><img src="/images/gates/location/instagram.png"><span>Follow Us <br> on Instagram</span></div></div></a>');
          });
          $('.instagram-feed').slideDown('slow');
        },1000);
        }
      });
});



//Date Picker
$(document).ready(function() {

  $('.selectpicker').selectpicker();
  
   adjustHomeBannerHeight();
  

  console.log(window.location.href);


  $("#od_arrival").datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#arrival_date',
    altFormat: 'yy-mm-dd',
    minDate: 0,
    onSelect: function(date) {
      var date2 = $('#od_arrival').datepicker('getDate');
      date2.setDate(date2.getDate() + 1);
      $('#od_departure').datepicker('setDate', date2);
      //sets minDate to dt1 date + 1
      $('#od_departure').datepicker('option', 'minDate', date2);
    }
  });
  $('#od_departure').datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#departure_dates',
    altFormat: 'yy-mm-dd',
    onClose: function() {
      var dt1 = $('#v').datepicker('getDate');
      console.log(dt1);
      var dt2 = $('#od_departure').datepicker('getDate');
      if (dt2 <= dt1) {
        var minDate = $('#od_departure').datepicker('option', 'minDate');
        $('#od_departure').datepicker('setDate', minDate);
      }
    }
  });
  $("#ui-datepicker-div").addClass("od-cal");

  $("#arrival_date, .main-date, .main-date-1").datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#arrival_date',
    altFormat: 'yy-mm-dd',
    minDate: 0,
    onSelect: function(date) {
      var date2 = $('#arrival_date').datepicker('getDate');
      date2.setDate(date2.getDate() + 1);
      $('#departure_date').datepicker('setDate', date2);
      //sets minDate to dt1 date + 1
      $('#departure_date').datepicker('option', 'minDate', date2);
    }
  });
  $('#departure_date, #departure_date_1, .alternate-date, .alternate-date-1').datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#departure_date',
    altFormat: 'yy-mm-dd',
    onClose: function() {
      var dt1 = $('#v').datepicker('getDate');
      console.log(dt1);
      var dt2 = $('#departure_date').datepicker('getDate');
      if (dt2 <= dt1) {
        var minDate = $('#departure_date').datepicker('option', 'minDate');
        $('#departure_date').datepicker('setDate', minDate);
      }
    }
  });
  // setTimeout(function() {
    $(".price-wrap1, .caption-price").css("display", "block");
  // }, 4500);
  $(".homeTonightRate").click(function() {
    $(".booking-widget form").submit();
  });

  function adjustHomeBannerHeight(){
      var mheight = $(window).height();
      var mwidth = $(window).width();
      if (mwidth > 300) {
        $(".home-banner .carousel-inner .item").height(mheight - 50);
      }
      if (mwidth > 768) {
        $(".home-banner .carousel-inner .item").height(mheight - 75);
      }
      if (mwidth > 1240) {
        $(".home-banner .carousel-inner .item").height(mheight - 121);
      }
      setTimeout(function(){
          $('#home-banner').carousel();

      },2500);
      setTimeout(function(){
          //for room detail page banner
          if (mwidth > 300) {
            $(".room-details-page .carousel-inner .item").height(mheight - 50);
          }
          if (mwidth > 768) {
            $(".room-details-page .carousel-inner .item").height(mheight - 75);
          }
          if (mwidth > 1240) {
            $(".room-details-page .carousel-inner .item").height(mheight - 121);
          }
      },2900);

  }
  $(window).on(' resize', function() {
      adjustHomeBannerHeight();
  });

  //to add locale while submitting booking widget form
  $(document).on('submit', 'form', function(){
      var this_action = $(this).attr("action");

      var localeEl='';
      var locale = $('#rezlang').val() || 'en';
      if(this_action && this_action.indexOf('https://newyorkerhotel.reztrip.com/') != -1 && $(".ttweb-booking-widget input[name='locale']").length ==0){

          localeEl = localeEl + "<input type='hidden' name='locale' value='" + locale + "'>";
      }
      if(localeEl != '' ){
          localeEl = $(localeEl);
          $(this).prepend(localeEl);
      }
  });
  $(document).on("click", "a", function(){

        var this_href = $(this).attr("href");
        var locale = $('#rezlang').val() || 'en';

        if(this_href && this.href.indexOf('https://newyorkerhotel.reztrip.com/calendar') != -1 && this_href.indexOf('locale') == -1){
           if(this_href.indexOf('?') != -1 )
               this_href = this_href +"&";
           else
               this_href = this_href +"?";
           this_href = this_href + 'locale='+locale;
           $(this).attr('href',this_href);
        }



    })
});

$(window).on('load scroll resize', function() {

  var mheight = $(window).height();
  var mscroll = $(window).scrollTop();
  var mwidth = $(window).width();

  if (mwidth > 1240) {
    if (mscroll > 121) {
      $(".header-wrapper").addClass("fixed-header-wrapper");
      $("body").addClass("body-padd-sticky");
    } else {
      $(".header-wrapper").removeClass("fixed-header-wrapper");
      $("body").removeClass("body-padd-sticky");
    }
  }

  if (mwidth < 1240) {
    $(".header-wrapper").addClass("fixed-header-device");
    $("body").addClass("body-padd-sticky");
    $(".header-wrapper").removeClass("fixed-header-wrapper");

  } else {
    $(".header-wrapper").removeClass("fixed-header-device");
  }

});

$('#rd-carousel').carousel({
  interval: false
});

$('#home-banner').on('slid.bs.carousel', function() {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  var total = carouselData.$items.length;
  var text = (currentIndex + 1) + " of " + total;
  $('.num').text(text);
});

$(document).ready(function() {
  $('.owl-carousel.attractions-carousel').owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
      },
      600: {
        items: 3,
        nav: false,
        loop: true
      },
      1000: {
        items: 3,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true
      }
    }
  })
});

$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".main-menu").slideToggle(300);
  });
  $('#thenewyorkergallery').lightGallery({
    selector: '.item'
  });

  // get rt3 offers in gallery
   $('#thenewyorkergallery').rezGallery({
             hotelID : 'NYCNYR',
             portalID : 'newyorkerhotel',
             buttonClass :'btn-common',
             pageLink : true,
             description : true,
             offerdetailPage : '/offer-details/'
   });

});

$(document).ready(function() {

  $(".filter").on("click", function() {
    var $this = $(this);
    // if we click the active tab, do nothing
    if (!$this.hasClass("active")) {
      $(".filter").removeClass("active");
      $this.addClass("active"); // set the active tab
      var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
      $filter == 'all' ? // if we select "view all", return to initial settings and show all
        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() : // otherwise
        $(".fancybox").fadeOut(0).filter(function() {
          return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
    } // if
  }); // on

  setTimeout(function() {

    var allDescDiv = $('.offerDesc');
    var biggestHeight = 0;
    var ht

    allDescDiv.each(function() {
      ht = $(this).height();
      if (ht > biggestHeight) {

        biggestHeight = ht;
      }
    });

    allDescDiv.height(biggestHeight);

  }, 2500);

});

//Youtube  Welcome Video Embed

$('#link').click(function() {
  var src = 'https://www.youtube.com/embed/xrBfrXM_vxY?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  $('#welcomeVideo').modal('show');
  $('#welcomeVideo iframe').attr('src', src);
});

$('#history-link').click(function() {
  var src = 'https://www.youtube.com/embed/PYD1ZnWT4Jg?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  $('#welcomeVideo').modal('show');
  $('#welcomeVideo iframe').attr('src', src);
});

$('#welcomeVideo button').click(function() {
  $('#welcomeVideo iframe').removeAttr('src');
});

//Youtube Events Video Embed

$('#ev').click(function() {
  var src = 'https://www.youtube.com/embed/qArdOdD63jk?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  $('#eventsVideo').modal('show');
  $('#eventsVideo iframe').attr('src', src);
});

//Youtube Gallery Video Embed

$('#gal-1').click(function() {
  var src = 'https://www.youtube.com/embed/xrBfrXM_vxY?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  $('#galleryVideo-1').modal('show');
  $('#galleryVideo-1 iframe').attr('src', src);
});
$('#gal-2').click(function() {
  var src = 'https://www.youtube.com/embed/qArdOdD63jk?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
  $('#galleryVideo-2').modal('show');
  $('#galleryVideo-2 iframe').attr('src', src);
});

$('.modal .close').click(function() {
  $('.modal iframe').removeAttr('src');
});

$(window).load(function() {
  if ($(window).width() > 768) {

    jQuery('ul.nav li.dropdown a').attr('data-toggle', 'disable');
    //Add Hover effect to menus
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
    });
  } else {
    //jQuery('ul.nav li.dropdown a.dropdown-toggle').removeAttr('data-toggle');
  }

});

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top - 120;
        max = ($(this).height() + min);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }

      });
    });

  }
})(jQuery);
$("#timeline-1").timeline();

// language dropdown
  $(".booknow.langpick").hover(function(){
    $(this).find(".dropdown-menu").slideDown(100);
    }, function(){
    $(this).find(".dropdown-menu").slideUp(100);
  });
