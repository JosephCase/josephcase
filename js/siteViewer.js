function SiteViewer(element) {
	
	var _element = element,
		_holderHeight,
		_siteImage,
		_imgHeight,
		_image_startingY,
		scroll_timeout,
		clickStart;

	getDimensions();

	function getDimensions() {
		_holderHeight = _element.height();
		_siteImage = _element.children("img");
		_imgHeight  = _siteImage.height();
		_image_startingY = _siteImage.offset().top;

	}

	function moveImage(mouse_Y) {
		console.log("GO");
		var scrollPosition = _imgHeight * (mouse_Y  / _element.innerHeight());
		$(_element).scrollTop(scrollPosition);
	}

	function moveImage_2(mouse_Y) {
		$(_element).animate({ scrollTop: _imgHeight * (mouse_Y  / _element.innerHeight()) }, 500);
	}

	$(_element).on("mousedown", function(e) {		
		$(_element).animate({ scrollTop: _imgHeight * ((e.pageY - _image_startingY)  / _element.innerHeight()) }, 500);
	});

	$(window).on("mouseup", function() {
		$(window).off("mousemove");
	});

	// $(_siteImage).on("mousemove", function(e) {
	// 	moveImage(e.pageY - _image_startingY);
	// });

	// // $(window).on("scroll", function() {
	// // 	console.log($(window).scrollTop());
	// // 	$(_element).scrollTop($(window).scrollTop());
	// // });

	// $(_element).on("mouseleave", function(e) {
	// 	$(_element).animate({ scrollTop: 0 });
	// })


	// $(window).on("scroll", function() {
	// 	clearTimeout(scroll_timeout);
	// 	$(_siteImage).off("mousemove");
	// 	scroll_timeout = setTimeout(function() {
	// 		$(_siteImage).on("mousemove", function(e) {
	// 			moveImage(e.pageY - _image_startingY);
	// 		});
	// 	}, 500)
	// })






}