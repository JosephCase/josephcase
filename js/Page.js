document.addEventListener("DOMContentLoaded", function(event) {

	var oPage = new Page();

});

function Page() {
	$(".bubble").on( "click", function() {
	 	$(".bubble.active").removeClass("active");
	 	$(this).addClass("active");
	 	$("body.initial").removeClass("initial");
		$('#' + this.getAttribute('data-section')).addClass("active");
	});
}