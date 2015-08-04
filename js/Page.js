document.addEventListener("DOMContentLoaded", function(event) {

	var oPage = new Page();

});

function Page() {
	$(".bubble").on( "click", function() {
		if (!$(this).hasClass("active")) {
			$(".bubble.active").removeClass("active");
		 	$(this).addClass("active");
		 	$("body.initial").removeClass("initial");
			$('section.active').addClass("remove");
			$('#' + this.getAttribute('data-section')).addClass("active");
			setTimeout(function() {
				$('section.remove').removeClass("remove active");
			}, 1200);
		}
	 	
	});
}