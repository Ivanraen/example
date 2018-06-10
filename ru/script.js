$(function(){
	$('.toggleMenu').on('click', function(){
		$('.dws-menu').slideToggle(300);
	});
	$(window).resize(function(){
		if ($(window).width() > 1200 ) {
			$('.dws-menu').removeAttr('style');
		}
	});
});

$(document).ready(function () {
	$('.flexslider').flexslider({
		animation: 'fade',
		controlsContainer: '.flexslider'
	});
});