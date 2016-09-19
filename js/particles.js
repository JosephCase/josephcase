var Needles = function(canvas, color, density) {

    canvas.width = canvas.offsetWidth, canvas.height = canvas.offsetHeight;

    var cw = canvas.offsetWidth, ch = canvas.offsetHeight, color = color,

    mouseX = cw/2, mouseY = ch/2,
    ctx = canvas.getContext('2d');
    // ctx.lineWidth = 1,
	ctx.lineCap='round';	
    ctx.fillStyle = color;
    
    ctx.globalAlpha = 0.5;
    var stop = false;

    var pixels = [];
    var introSection;

    var colors = ['#f3a0ae', '#2c5d8a', '#a22529'];

    console.log(density, cw, ch, 1e6)

    var amount = density * cw * ch / 1e6;

    for (var i = 0; i < amount; i++) {
    	pixels.push({x: Math.random() * cw, y: Math.random() * ch, color: colors[Math.floor(3*Math.random())]});
    }

    // draw();

    introSection = document.getElementsByTagName('section')[0]

    introSection.addEventListener('mousemove', userActionHandler);
    introSection.addEventListener('touchstart', userActionHandler);
    introSection.addEventListener('touchmove', userActionHandler);

    // window.addEventListener('resize', resizeHandler);

    function resizeHandler() {
        canvas.width = canvas.offsetWidth, canvas.height = canvas.offsetHeight;
        ctx = canvas.getContext('2d');
        // ctx.lineWidth = 1;
        ctx.lineCap='round';
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

	        // get the new origin/angle
	        ctx.translate(pixels[i].x, pixels[i].y);

            // console.log(pixels[i].x, pixels[i].y);

	        //draw
	        // ctx.beginPath();
            // ctx.strokeStyle = pixels[i].color;

	        //LINE
            // ctx.moveTo(0 , 0);
            // var lineWidth = 1000/((mouseY - pixels[i].y) / Math.sin(angle));
            // lineWidth = (lineWidth > 20) ? 20 : lineWidth;
            // ctx.lineWidth = lineWidth
            // ctx.lineTo((-(mouseY - pixels[i].y) / Math.sin(angle))/10 , 0);

            //BLOB
            // var lineWidth = 1000/((mouseY - pixels[i].y) / Math.sin(angle));
            // lineWidth = (lineWidth > 200) ? 200 : lineWidth;
            // ctx.lineWidth = lineWidth;
	        // ctx.lineTo(0 , 0);

	        // TRIANGLE
            // ctx.lineTo(3 , 0);
            // ctx.lineTo(-3 , 3);
            // ctx.fill();

            // ctx.stroke();


            var size = 500/Math.sqrt(Math.pow(mouseX - pixels[i].x, 2) + Math.pow(mouseY - pixels[i].y, 2));
            // size = (size > 500) ? 500 : size;

	        ctx.moveTo(0, 0);
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, 2*Math.PI, false);

            // line color
            ctx.fillStyle = pixels[i].color;
            ctx.fill();

            ctx.translate(-pixels[i].x, -pixels[i].y);


        } 

    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     // var needles = new Needles(document.getElementById('particles'), '#d53300', 500);
// });

