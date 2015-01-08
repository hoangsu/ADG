$(document).ready(function() {
	$("#open-menu").click(function(event) {
		$(this).toggleClass('transform-right');
		$("#sidr").toggleClass('transform-left');
		if ($("body").hasClass('margin-left')) {
			$("body").animate({"left":"0"}, 400);
			$("body").removeClass('margin-left');
		}
		else {
			$("body").addClass('margin-left');
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
});
