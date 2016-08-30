document.addEventListener('DOMContentLoaded', DOMReady);

var sections;


function DOMReady() {
	sections = document.getElementsByTagName('section');
	for (var i = sections.length - 1; i >= 0; i--) {
		console.log(sections[i].offsetTop);
		console.log(sections[i].offsetBottom);
	}

	window.addEventListener('scroll', scrollHandler);

}

function scrollHandler(e) {

	for (var i = sections.length - 1; i >= 0; i--) {
		console.log(window.innerHeight)
		if(window.scrollY < sections[i].offsetTop) {
			sections[i].className = 'preStick';
		}  else if (window.scrollY + window.innerHeight > sections[i].offsetTop + sections[i].offsetHeight)
			sections[i].className = 'postStick';
		else {
			sections[i].className = 'stick';			
		}
	}
}