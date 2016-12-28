$(window).on('load scroll resize', function () {

 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();

	if(mwidth > 1240){
	if(mscroll > 121){
		$(".header-wrapper").addClass("fixed-header-wrapper");
		$("body").addClass("body-padd-sticky");
	}

	else{
		$(".header-wrapper").removeClass("fixed-header-wrapper");
		$("body").removeClass("body-padd-sticky");
	}
	}


	if(mwidth < 1240){
		$(".header-wrapper").addClass("fixed-header-device");
		$("body").addClass("body-padd-sticky");
		$(".header-wrapper").removeClass("fixed-header-wrapper");

	}
	else{
		$(".header-wrapper").removeClass("fixed-header-device");
	}

 });


 $('#rd-carousel').carousel({
    	interval: false
	});

function initMap() {
        var myLatLng = {lat: 40.749129, lng: -73.991691};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: new google.maps.LatLng(40.749129, -73.991691),
		  scrollwheel: false,
		  disableDefaultUI: true
        });
		
		
		
		var iconBase = '/images/'; 
		
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Stewart Hotel',
		  icon: iconBase + 'loc.png'
        });
		
      }
	  
	 
$(window).on('load resize', function () {
	var mheight = $(window).height();
	var mwidth = $(window).width();
	
	if(mwidth > 300){
		$(".home-banner .carousel-inner .item").height(mheight-50);
	}
	if(mwidth > 768){
		$(".home-banner .carousel-inner .item").height(mheight-75);
	}
	if(mwidth > 1240){
		$(".home-banner .carousel-inner .item").height(mheight-121);
	}
	
});  



$('#home-banner').on('slid.bs.carousel', function () {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  var total = carouselData.$items.length;
  var text = (currentIndex + 1) + " of " + total;
  $('.num').text(text);
});

$(document).ready(function(){
	$('.owl-carousel.attractions-carousel').owlCarousel({
		loop:true,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			},
			600:{
				items:3,
				nav:false,
				loop:true
			},
			1000:{
				items:3,
				nav:true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				loop:true
			}
		}
	})
});

 $(document).ready(function() {
	 $(".menu-btn").click(function(){
		 $(".main-menu").slideToggle(300);
	 });
	 $('#thenewyorkergallery').lightGallery({
   		selector: '.item'
		})
 });
 
  $(document).ready(function() {
	
	 
	 
	  $(".filter").on("click", function () {
    var $this = $(this);
    // if we click the active tab, do nothing
    if (!$this.hasClass("active")) {
      $(".filter").removeClass("active");
      $this.addClass("active"); // set the active tab
      var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
      $filter == 'all' ? // if we select "view all", return to initial settings and show all
        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() 
        : // otherwise
        $(".fancybox").fadeOut(0).filter(function () { 
          return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
    } // if
  }); // on
	 
	 
 });