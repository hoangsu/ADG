$(document).ready(function() {
	$('#home-slider .flexslider').flexslider({
		animation: "slide",
		controlNav:false
	});
	$("#open-menu").click(function(event) {
		$(this).toggleClass('transform-right');
		$("#sidr").toggleClass('transform-left');
		if ($("body").hasClass('position')) {
			$("body").removeClass('position');
			$("body").animate({"left":"0"}, 400);
		}
		else {
			$("body").addClass('position');
			$("body").animate({"left":"268px"}, 400);
		}
		
	});
	$("#sidr ul li a.expand").click(function(event) {
		$(this).next("i").toggleClass('menu-arrow');
		$(this).next().next("ul").toggleClass('menu-open');
		$(this).next().next("ul").slideToggle();
	});
	$("#sidr ul li i").click(function(event) {
		$("#sidr ul li a.expand").click();
	});
	$(".video").click(function() {
		$(this).toggleClass('hide');
	});
	$('.video .overlay button').each(function(){
		var myVideo = $(this).parent().next('video');
		$(this).click(function(){
			if ( myVideo.get(0).paused) {
				myVideo.get(0).play();
				$(this).addClass("pause");
			}
			else {
				myVideo.get(0).pause();
				$(this).removeClass("pause");
			}
			myVideo.bind("ended", function() {
			   $(this).prev('.overlay').find('button').removeClass("pause");
			   $(this).prev('.overlay').show();
			});
		})
	})
});
