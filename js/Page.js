document.addEventListener("DOMContentLoaded", function(event) {

	var oPage = new Page();

});

function Page() {

	start();

	var opening = setTimeout(openHeader, 5000);

	$("header").on( "click", function() {
		clearTimeout(opening);
		openHeader();
		$(this).remove("click");
	});

	$(".bubble").on( "click", function() {
		show(this);			 	
	});

	function start() {
		document.body.className = "initial";
	}

	function openHeader() {
		console.log("openHeader");
		$("body.initial").removeClass("initial");
	}

	function show(section) {
		console.log("show");
		//need to make this more defensive
		if (!$(section).hasClass("active")) {
			$(".bubble.active").removeClass("active");
		 	$(section).addClass("active");
			$('section.active').addClass("remove");
			$('#' + section.getAttribute('data-section')).addClass("active");
			setTimeout(function() {
				$('section.remove').removeClass("remove active");
			}, 1200);
		}
	}

	function onTransitionEnd(element, func, aParams) {
	    var transitionEnd;
		// transition prefixes
		var transitions = {
	      'transition':'transitionend',
	      'OTransition':'oTransitionEnd',
	      'MozTransition':'transitionend',
	      'WebkitTransition':'webkitTransitionEnd'
	    }
	    //loop through to check which is the right transition prefix (transition)
	    for(t in transitions){
	        if( element.style[t] !== undefined ){
	            transitionEnd = transitions[t];
	            break;
	        }
	    }
	    $(element).on(transitionEnd, function() {
	    	func(aParams);
	    })
	}
}