$( document ).ready(function() {
    var oBubbles = new Bubbles();
});



var Bubbles = function() {
	var me = this,
		device,
		$target,
		$resizer,
		$iframeHolder,
		$text;

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
		});


	}

	this.setupElements = function(event) {
		$target = $(event.target);
		$resizer = $target.children(".resizer");
		$iframeHolder = $target.children(".iframeHolder");
		$text = $target.children(".text");
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

		$iframeHolder.addClass("active");

		$("#portfolio").on("mousemove", function () {
			me.resize(event);
		});
	}

	this.resize = function(event) {
		console.log("resize");
		$iframeHolder.css("width", event.pageX + "px");
		$text.css("width", ($target.width() - event.pageX) + "px");
	}

	this.resizeEnd = function() {
		$("#portfolio").unbind("mousemove");
		$iframeHolder.removeClass("active");
		$resizer.on("mousedown", function () {
			me.resizeStart();
		});
	}			

	this.contruct();
}