document.addEventListener("DOMContentLoaded", function(event) { 
	var scroller = new Scroller();
});

function Scroller() {

	attachScroll();

	function attachScroll() {
		$(window).scroll(function(e) {
			console.log("scroll");
			scrollPage(e);
		});
	}

	function detachScroll() {
		$(window).unbind("scroll");
	}

	var lastScrollTop = $(window).scrollTop();

	function scrollPage(e) {

		detachScroll();

		var $element;

		console.log(lastScrollTop, $(this).scrollTop(), $(this).scrollTop() - lastScrollTop);

		if ($(this).scrollTop() < lastScrollTop) {
			console.log("up");
			$element = $("#lowcostholidays");
		} else if ($(this).scrollTop() > lastScrollTop) {
			console.log("down");
			$element = $("#ruby");
		}
		
		if ($element) {
			$("html body").animate({
			    scrollTop: $element.offset().top
			}, 500, function() {
				lastScrollTop = $(this).scrollTop();
				attachScroll()
			});
		} else {
			lastScrollTop = $(this).scrollTop();
			attachScroll();
		}
		
	}
}