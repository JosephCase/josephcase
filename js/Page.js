document.addEventListener("DOMContentLoaded", function(event) {

	var oPage = new Page();

});

function Page() {

	start();

	var opening = setTimeout(openHeader, 5000);

	$("h2").on("click", function() {
		$(this).unbind("click");
		clearTimeout(opening);
		openHeader();
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
		$("h4.about").addClass("show");

	}

	function show(section) {
		console.log("show");
		//need to make this more defensive
		$(".about.show").removeClass("show"); //removes show class if it has it

		if (!$(section).hasClass("active")) {
			$(".bubble.active").removeClass("active");
			$('section.active').removeClass("active");
			$('#' + section.getAttribute('data-section')).addClass("active");
		 	$(section).addClass("active");
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