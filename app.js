document.addEventListener('DOMContentLoaded', DOMReady);

var sections, videos;


// add custom property of the HTML video object
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})


function DOMReady() {

	sections = document.getElementsByTagName('section');
	videos = document.getElementsByTagName('video');

	window.addEventListener('scroll', scrollHandler);

}

function scrollHandler() {
	sectionScroll();
	videoScroll();
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