$( document ).ready(function() {
    var oBubbles = new Bubbles();
});



var Bubbles = function() {
	var me = this,
		device,
		$target,
		$resizer,
		$iframe;

	this.contruct = function() {
		$("header").on("click", function() {
			me.closeBubbles();
		})
		$(".bubble").on("click", function() {
			me.openBubble(event);
		})
	}

	this.openBubble = function(event) {

		me.setupElements(event);

		$target.unbind();
		$target.addClass("show");
		$("header").addClass("active");

		$resizer.on("mousedown", function () {
			me.resizeStart();
		});
		$("#portfolio").on("mouseup", function () {
			me.resizeEnd();
		});
		$("header").on("mouseover", function () {
			me.resizeEnd();
		})

	}

	this.setupElements = function(event) {
		$target = $(event.target);
		$resizer = $target.children(".resizer");
		$iframe = $target.children("iframe");
	}

	this.closeBubbles = function() {

		$("header").removeClass("active");
		$target.removeClass("show");
		$(".bubble").on("click", function() {
			me.openBubble(event);
		})
	}

	this.resizeStart = function() {
		$resizer.unbind("mousedown");


		$("#portfolio").on("mousemove", function () {
			me.resize(event);
		});
	}

	this.resize = function(event) {
		console.log("resize");
		$iframe.css("width", event.pageX - 5 + "px");
	}

	this.resizeEnd = function() {
		$("#portfolio").unbind("mousemove");
		$resizer.on("mousedown", function () {
			me.resizeStart();
		});
	}			

	this.contruct();
}