//Date Picker
 $(document).ready(function() {
$("#od_arrival").datepicker({
            dateFormat: "yy-mm-dd",
			altField  : '#arrival_date',
			altFormat : 'yy-mm-dd',
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#od_arrival').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#od_departure').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#od_departure').datepicker('option', 'minDate', date2);
            }
        });
        $('#od_departure').datepicker({
            dateFormat: "yy-mm-dd",
			altField  : '#departure_dates',
			altFormat : 'yy-mm-dd',
            onClose: function () {
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
			altField  : '#arrival_date',
			altFormat : 'yy-mm-dd',
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#arrival_date').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#departure_date').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#departure_date').datepicker('option', 'minDate', date2);
            }
        });
        $('#departure_date, #departure_date_1, .alternate-date, .alternate-date-1').datepicker({
            dateFormat: "yy-mm-dd",
			altField  : '#departure_dates',
			altFormat : 'yy-mm-dd',
            onClose: function () {
                var dt1 = $('#v').datepicker('getDate');
                console.log(dt1);
                var dt2 = $('#departure_date').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('#departure_date').datepicker('option', 'minDate');
                    $('#departure_date').datepicker('setDate', minDate);
                }
            }
        });

         });

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
