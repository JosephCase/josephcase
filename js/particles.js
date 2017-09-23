var Needles = function(_canvas, color, density) {

    var cw, ch, ctx,
    canvas = _canvas,
    stop = false,
    pixels = [],
    colors = ['#f3a0ae', '#2c5d8a', '#a22529'];

    createCTX();

    var amount = density * cw * ch / 1e6;   //  - dependant on createCTX as this sets cw & ch

    setupPixels();
    addEventListeners();
    
    function setupPixels() {
        console.log(amount);
        for (var i = 0; i < amount; i++) {
            pixels.push({x: Math.random(), y: Math.random(), color: colors[Math.floor(3*Math.random())]});
        }
    }    

    function createCTX() {
        cw = canvas.width = canvas.offsetWidth, ch = canvas.height = canvas.offsetHeight
        ctx = canvas.getContext('2d');
        ctx.lineCap='round';    
        ctx.fillStyle = color;    
        ctx.globalAlpha = 0.7;
    }

    function addEventListeners() {
        var introSection = document.getElementsByTagName('section')[0]

        introSection.addEventListener('mousemove', userActionHandler);
        introSection.addEventListener('touchstart', userActionHandler);
        introSection.addEventListener('touchmove', userActionHandler);

        window.addEventListener('resize', resizeHandler);
    }

    function resizeHandler() {
        createCTX();
        draw();
    }

    function userActionHandler(e) {
        if(e && e.touches) {
            mouseX = e.touches[0].pageX / (canvas.offsetWidth / canvas.width);
            mouseY = e.touches[0].pageY / (canvas.offsetHeight / canvas.height);
        } else {
            mouseX = e.pageX / (canvas.offsetWidth / canvas.width);
            mouseY = e.pageY / (canvas.offsetHeight / canvas.height);
        }
        if(!stop) {
            window.requestAnimationFrame(draw);
        }
    }

    function draw() {

        //clear the canvas
        ctx.clearRect(0, 0, cw, ch);

        //Draw each particle
        for (var i = 0; i < pixels.length; i++) {

        	// var angle = Math.atan2(mouseY - pixels[i].y, mouseX - pixels[i].x);
            var x = pixels[i].x * cw, y = pixels[i].y * ch

	        // get the new origin/angle
	        ctx.translate(x, y);


            var size = 500/Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
            // size = (size > 500) ? 500 : size;

	        ctx.moveTo(0, 0);
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, 2*Math.PI, false);

            // line color
            ctx.fillStyle = pixels[i].color;
            ctx.fill();

            ctx.translate(-x, -y);


        } 

    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     // var needles = new Needles(document.getElementById('particles'), '#d53300', 500);
// });

