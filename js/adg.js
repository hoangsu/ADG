$(document).ready(function() {
	$('.menu > ul > li').mouseover(function() {
		var subMenu = $(this).find('.sub-menu');
		var smItem = $(this).find('.sm-item')
		smItem.hover(function(){
			$(this).parent().find('.sm-item').each(function(index, el) {
				if ($(this).hasClass('active')) {
					$(this).addClass('hover');
					$(this).removeClass('active');
				};
			});
		})
		subMenu.mouseleave(function() {
			smItem.each(function(){
				if ($(this).hasClass('hover')) {
					$(this).addClass('active');
					$(this).removeClass('hover');
				};
			})
		});
	})
	$('.nmenu > li > i').click(function() {
		$(this).parent().children('.sub-menu').slideToggle();
	});
	$('.video .overlay button').each(function(){
		var myVideo = $(this).parent().next('video');
		$(this).click(function(){
			if ( myVideo.get(0).paused) {
				myVideo.get(0).play();
				$(this).addClass("pause");
				$(this).parent().parent().mouseleave(function() {
					$(this).find('.overlay').hide();
				});
				$(this).parent().parent().mouseenter(function() {
					$(this).find('.overlay').show();
				});
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
