function SiteViewer(element) {
	
	var _element = element,
		_holderHeight,
		_siteImage,
		_imgHeight,
		_image_startingY;

	getDimensions();

	function getDimensions() {
		_holderHeight = _element.height();
		_siteImage = _element.children("img");
		imgHeight  = _siteImage.height();
		_image_startingY = _siteImage.offset().top;

	}

	function moveImage(mouse_Y) {
		// _element.stop(true);
		// if (mouse_Y > 0) {
			var scrollPosition = imgHeight * (mouse_Y  / _holderHeight);
			// console.log(imgHeight * ((mouse_Y - 0.5 * _holderHeight) / (0.5 * _holderHeight)));
			_siteImage.css({ top: -scrollPosition + 'px' });
		// }
	}

	$(_siteImage).on("mousemove", function(e) {
		moveImage(e.pageY - _image_startingY);
	});

	// $(_element).on("mouseleave", function(e) {
	// 	console.log("trigger?");
	// 	_siteImage.animate({ top: '0' }, 1000);
	// })
}