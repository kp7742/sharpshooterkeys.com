
$(document).ready(function() {
	 "use strict";
	 	  var owl = $("#app-screen");
	  owl.owlCarousel({
		  items : 4, //10 items above 1000px browser width
		  itemsDesktop : [1000,3], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,3], // betweem 900px and 601px
		  itemsTablet: [600,2], //2 items between 600 and 0
		  itemsMobile : [400,1] // itemsMobile disabled - inherit from itemsTablet option
	  });
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	
	/*----latest news----*/
	    $("#news-post-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile: [600, 1],
        navigation : false,
        pagination:false,
        autoPlay : true
    });
				

	}(jQuery));