	// sticky Nav
	$(document).ready(function() {
   		$(window).scroll(function(){
   		  if($(this).scrollTop()>=200){
   		  	$('.header-navbar').addClass('navbar-fixed');
   		  	setTimeout(function(){ 
   		  		$('.header-navbar').addClass('awake');
   		  	}, 50); 	
   		  }
   		  else{
   		  	$('.header-navbar').removeClass('navbar-fixed');
   		  	setTimeout(function(){ 
   		  		$('.header-navbar').removeClass('awake');
   		  	}, 50); 	
   		  }
   		});


   		// counter
   		 $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

   		
	var carousel = function() {
		$('.testimonial-area').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			autoplaySpeed:2000,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();
    
    
    	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// gmaps
	var  map=new GMaps({
  	div: '.map',
  	lat: 23.873751,
  	lng: 90.396454,
	}); 






	
	});