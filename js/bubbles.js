$( document ).ready(function() {
    var oBubbles = new Bubbles();
});



var Bubbles = function() {
	var me = this;

	this.contruct = function() {

		$(".bubble").on("click", function() {
			me.bubbleClick(event);
		})
	}

	this.bubbleClick = function(event) {

		$target = $(event.target);
		$target.toggleClass("show");
	}	

	this.contruct();
}