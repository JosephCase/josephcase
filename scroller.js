document.addEventListener("DOMContentLoaded", function(event) { 
	var scroller = new Scroller();
});

function Scroller() {

	attachScroll();

	// var rect = element.getBoundingClientRect();
	var sections = document.getElementsByTagName("section");

	

	function attachScroll() {
		$(window).scroll(function(e) {
			scrollPage(e);
		});
	}

	function detachScroll() {
		$(window).unbind("scroll");		
		$(window).scrollable = false;
	}

	var lastScrollTop = $(window).scrollTop();

	function test(e) {
	  // e = e || window.event;
	  e.preventDefault();
	  // e.returnValue = false;  
	}

	function scrollPage(e) {

		detachScroll();

		

		var $element;

		var windowHeight = window.innerHeight;
		// console.log(sections[2].getBoundingClientRect().top);
		// console.log(windowHeight * 0.8);
		// console.log(windowHeight * 0.7);

		for (var i = 0; i < sections.length; i++) {
			if ((sections[i].getBoundingClientRect().top < (windowHeight * 0.8) && sections[i].getBoundingClientRect().top > (windowHeight * 0.6))) {
				
				console.log(sections[i], i, "down");
				$element = $(sections[i]);
			}
			if ((sections[i].getBoundingClientRect().bottom < (windowHeight * 0.5) && sections[i].getBoundingClientRect().bottom > (windowHeight * 0.3))) {
				
				console.log(sections[i], i, "up");
				$element = $(sections[i]);
			}

		};
		
		if ($element) {
			// window.onwheel = test; // modern standard
			$("html body").animate({
			    scrollTop: $element.offset().top - (windowHeight * 0.1)
			}, 500, function() {
				lastScrollTop = $(this).scrollTop();
				attachScroll()
				// window.onwheel = null; // modern standard
			});
		} else {
			lastScrollTop = $(this).scrollTop();
			attachScroll();
		}
		
	}
}