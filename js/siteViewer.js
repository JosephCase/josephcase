function SiteViewer(element) {
	
	var _element = element,
		_holderHeight,
		_siteImage,
		_imgHeight;

	getDimensions();

	function getDimensions() {
		_holderHeight = _element.height();
		_siteImage = _element.children("img");
		imgHeight  = _siteImage.height();
		console.log(_siteImage, imgHeight);

	}

	function moveImage(mouse_Y) {
		if (mouse_Y > _holderHeight / 2) {
			var scrollPosition = (imgHeight - _holderHeight) * ((mouse_Y - 0.5 * _holderHeight) / (0.5 * _holderHeight));
			// console.log(imgHeight * ((mouse_Y - 0.5 * _holderHeight) / (0.5 * _holderHeight)));
			_siteImage.css({ top: -scrollPosition + 'px' });
		}
	}

	$(_element).on("mousemove", function(e) {
		moveImage(e.pageY - $(this).offset().top);
	})

	$(_element).on("mouseleave", function(e) {
		console.log("trigger?");
		_siteImage.animate({ top: '0' }, 1000);
	})
}