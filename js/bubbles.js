$( document ).ready(function() {
    var oBubbles = new Bubbles();
});



var Bubbles = function() {
	var me = this,
		timeout;

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
		$target.unbind();
		$target.addClass("show");
		$("header").addClass("active");

		$resizer = $target.children(".resizer");

		$resizer.on("mousedown", function () {
			me.resizeStart($target, $resizer);
		});
		$("#portfolio").on("mouseup", function () {
			me.resizeEnd($target, $resizer);
		});
		$("header").on("mouseover", function () {
			me.resizeEnd($target, $resizer);
		})

	}
	this.closeBubbles = function() {

		$("header").addClass("active");
		$target = $(".bubble");
		$target.removeClass("show");
		$(".bubble").on("click", function() {
			me.openBubble(event);
		})
	}

	this.resizeStart = function($target, $resizer) {
		$resizer.unbind("mousedown");

		$iframe = $target.children("iframe");
		$iframe.addClass("active");

		$("#portfolio").on("mousemove", function () {
			me.resize(event, $target);
		});
	}

	this.resize = function(event, $target) {
		console.log("resize");
		$iframe = $target.children("iframe");
		$iframe.css("width", event.pageX - 5 + "px");
	}

	this.resizeEnd = function($target, $resizer) {
		$("#portfolio").unbind("mousemove");
		$iframe = $target.children("iframe");
		$iframe.removeClass("active");
		$resizer.on("mousedown", function () {
			me.resizeStart($target, $resizer);
		});
	}			

	this.contruct();
}