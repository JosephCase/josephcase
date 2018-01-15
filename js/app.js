document.addEventListener('DOMContentLoaded', DOMReady);

var sections, videos, canvas = {}, scrollTop, showHeader = true, skillCanvi = [];


// add custom property of the HTML video object
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {

  	// hide the header
  	document.getElementById('header').classList.add('hidden');

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      	showHeader = false;
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {setTimeout(function() {showHeader = true}, 100)});
        return false;
      }
    }
  });
});

function DOMReady() {

    var needles = new Needles(document.getElementById('particles'), '#383737', 150);

    var skillElems = document.getElementsByClassName('skill');

    for (var i = 0; i < skillElems.length; i++) {
    	skillCanvi.push(new  SkillCanvas(skillElems[i]));
    }

	sections = document.getElementsByTagName('section');
	videos = document.getElementsByTagName('video');
	canvas.element = document.getElementById('particles');
	canvas.ratio = canvas.element.width / canvas.element.height;

	setSectionHeight();

	window.addEventListener('scroll', scrollHandler);
	window.addEventListener('resize', resizeHandler);

	// resizeHandler(); //handles the pixel canvas display and section heights



}

function setSectionHeight() {	
	$('.fullHeight').css('height', window.innerHeight + 'px');
}

function scrollHandler(e) {
	headerScroll(e);
	if(window.innerWidth > 900) {
		sectionScroll();
	}
	videoScroll();
	skillScroll();
}

function resizeHandler() {

	// var scaleRatio;
	// if(window.innerWidth / window.innerHeight > canvas.ratio) {
	// 	scaleRatio = window.innerWidth / canvas.element.width;
	// } else {
	// 	scaleRatio = window.innerHeight / canvas.element.height;
	// }
	// console.log(scaleRatio);
	// canvas.element.style.width = (canvas.element.width * scaleRatio) + "px";
	// canvas.element.style.height = (canvas.element.height * scaleRatio) + "px";
}

function headerScroll(e) {
		
	if($(window).scrollTop() > scrollTop || scrollTop < window.innerHeight || !showHeader) {
		document.getElementById('header').classList.add('hidden');
	} else if($(window).scrollTop() < scrollTop) {
		document.getElementById('header').classList.remove('hidden');
	}
	scrollTop = $(window).scrollTop();
}

function sectionScroll() {
	var scrollTop = $(window).scrollTop();
	for (var i = sections.length - 1; i >= 0; i--) {
		if(scrollTop < sections[i].offsetTop) {
			sections[i].className = 'preStick';
		} else if (scrollTop + window.innerHeight > sections[i].offsetTop + sections[i].offsetHeight) {
			sections[i].className = 'postStick';
		} else {
			sections[i].className = 'stick';			
		}
	}
}

function videoScroll() {
	for (var i = videos.length - 1; i >= 0; i--) {
		var vidBounds = videos[i].getBoundingClientRect();
		if(vidBounds.top + (0.5 * vidBounds.height) < window.innerHeight && vidBounds.bottom > 0 && videos[i].readyState === 4) {
			if(!videos[i].playing) {
				videos[i].play();
			}
		} else {
			if(videos[i].playing) {
				videos[i].pause();
			}
		}
	}
}

function skillScroll() {
	var skillBox = document.getElementsByClassName('skillBox')[0];
	var bounds = skillBox.getBoundingClientRect();
	if(bounds.top + 300 < window.innerHeight) {
		for (var i = skillCanvi.length - 1; i >= 0; i--) {
			skillCanvi[i].play();
			skillCanvi.splice(i, 1);
		}
	}
}