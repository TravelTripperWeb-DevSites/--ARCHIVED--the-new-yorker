$(window).on('load scroll resize', function () {

 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();

	if(mwidth > 1240){
	if(mscroll > 100){
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
	  