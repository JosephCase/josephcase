document.addEventListener('DOMContentLoaded', DOMReady);

var sections, videos, canvas = {};


// add custom property of the HTML video object
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

function DOMReady() {

	sections = document.getElementsByTagName('section');
	videos = document.getElementsByTagName('video');
	canvas.element = document.getElementById('particles');
	canvas.ratio = canvas.element.width / canvas.element.height;

	window.addEventListener('scroll', scrollHandler);
	window.addEventListener('resize', resizeHandler);
	resizeHandler();

}

function scrollHandler() {
	sectionScroll();
	videoScroll();
}

function resizeHandler() {
	var scaleRatio;
	if(window.innerWidth / window.innerHeight > canvas.ratio) {
		scaleRatio = window.innerWidth / canvas.element.width;
	} else {
		scaleRatio = window.innerHeight / canvas.element.height;
	}
	console.log(scaleRatio);
	canvas.element.style.width = (canvas.element.width * scaleRatio) + "px";
	canvas.element.style.height = (canvas.element.height * scaleRatio) + "px";
}

function sectionScroll() {
	for (var i = sections.length - 1; i >= 0; i--) {
		if(window.scrollY < sections[i].offsetTop) {
			sections[i].className = 'preStick';
		}  else if (window.scrollY + window.innerHeight > sections[i].offsetTop + sections[i].offsetHeight)
			sections[i].className = 'postStick';
		else {
			sections[i].className = 'stick';			
		}
	}
}

function videoScroll() {
	for (var i = videos.length - 1; i >= 0; i--) {
		var vidBounds = videos[i].getBoundingClientRect();
		if(vidBounds.top + (0.5 * vidBounds.height) < window.innerHeight && vidBounds.bottom > 0) {
			if(!videos[i].playing) {
				console.log('play');
				videos[i].play();
			}
		} else {
			if(videos[i].playing) {
				console.log('pause');
				videos[i].pause();
			}
		}
	}
}