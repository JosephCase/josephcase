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

		$target.on("mousedown", function () {
			me.resizeStart($target);
		});
		$target.on("mouseup", function () {
			me.resizeEnd($target);
		})

	}
	this.closeBubbles = function() {

		$("header").addClass("active");
		$target = $(".bubble");
		$target.removeClass("show");
	}

	this.resizeStart = function($target) {
		$target.unbind("mousedown");

		$target.on("mousemove", function () {
			me.resize(event);
		});
	}

	this.resize = function(event) {
		console.log("resize");
		$iframe = $(event.target).children("iframe");
		$iframe.css("width", event.pageX + "px");
	}

	this.resizeEnd = function($target) {
		$target.unbind("mousemove");
		$target.on("mousedown", function () {
			me.resizeStart($target);
		});

	}			

	this.contruct();
}