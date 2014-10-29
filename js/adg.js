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
	/*$('.menu > ul > li').hover(function() {
		$(this).find('.sub-menu .sm-item').each(function(key,val) {
			$(this).find('.sm-content').css('top', -28*key);
		});

		(this).find('.sub-menu').show('fast', function() {
			$('.sm-item.active > a').css({
				background: '#00529c',
				color: '#fff'
			});
			$('.sub-menu .sm-item > a').hover(function() {
				$(this).next('.sm-content').show();
				if (!$(this).parent('.sm-item').hasClass('active')) {
					$('.sm-item.active .sm-content').hide()
					$('.sm-item.active > a').css({
						background: 'none',
						color: 'inherit'
					});
				}
				else {
					$(this).css({
						background: '#00529c',
						color: '#fff'
					});
				};
			}, function() {
				$(this).next('.sm-content').hide();
				$('.sm-item.active > a').css({
					background: '#00529c',
					color: '#fff'
				});
				$('.sm-item.active .sm-content').show()
			});	
		});
	}, function() {
		$(this).find('.sub-menu').hide();
	});*/
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
