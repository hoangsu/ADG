$(document).ready(function() {
	$('.menu > ul > li').hover(function() {
		$(this).find('.sub-menu .sm-item').each(function(key,val) {
			$(this).find('.sm-content').css('top', -28*key);
		});
		$(this).find('.sub-menu').show('fast', function() {
			$('.sm-item.first > a').css({
				background: '#00529c',
				color: '#fff'
			});
			$('.sm-item.first .sm-content').show();
			$('.sub-menu .sm-item > a').hover(function() {
				$(this).next('.sm-content').show();
				if (!$(this).parent('.sm-item').hasClass('first')) {
					$('.sm-item.first .sm-content').hide()
					$('.sm-item.first > a').css({
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
				$('.sm-item.first > a').css({
					background: '#00529c',
					color: '#fff'
				});
				$('.sm-item.first .sm-content').show()
			});	
		});
	}, function() {
		$(this).find('.sub-menu').hide();
	});
	
});