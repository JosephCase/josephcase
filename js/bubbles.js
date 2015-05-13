$( document ).ready(function() {
    var oBubbles = new Bubbles();
});



var Bubbles = function() {
	var me = this;

	this.contruct = function() {
		$("header").on("click", function() {
			me.closeBubbles();
		})
		$(".bubble").on("click", function() {
			me.openBubble(event);
		})
	}

	this.openBubble = function(event) {

		$target = $(event.target);
		$target.addClass("show");
		$("header").addClass("active");
	}
	this.closeBubbles = function() {

		$("header").addClass("active");
		$target = $(".bubble");
		$target.removeClass("show");
	}	

	this.contruct();
}