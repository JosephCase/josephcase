var Needles = function(canvas, color, amount) {

    var cw = canvas.width, ch = canvas.height, color = color,
    mouseX = cw/2, mouseY = ch/2,
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 4,
	ctx.lineCap='round';	
    ctx.fillStyle = color;
    var stop = false;

    var pixels = [];

    var colors = ['#f3a0ae', '#2c5d8a', '#a22529'];

    

    for (var i = 0; i < amount; i++) {
    	pixels.push({x: Math.random() * cw, y: Math.random() * cw, color: colors[Math.floor(3*Math.random())]});
    }

    draw();

    document.getElementsByTagName('section')[0].addEventListener('mousemove', function(e) {

        console.log(canvas.offsetWidth / canvas.width, canvas.offsetHeight / canvas.height);

        mouseX = e.pageX / (canvas.offsetWidth / canvas.width);
        mouseY = e.pageY / (canvas.offsetHeight / canvas.height);
        if(!stop) {
            window.requestAnimationFrame(draw);
        }

    })

    function draw() {

        //clear the canvas
        ctx.resetTransform();
        ctx.clearRect(0, 0, cw, ch);

        //Draw each particle
        for (var i = 0; i < pixels.length; i++) {

        	var angle = Math.atan2(mouseY - pixels[i].y, mouseX - pixels[i].x);

	        //reset position
	        ctx.resetTransform();

	        // get the new origin/angle
	        ctx.translate(pixels[i].x, pixels[i].y);
	        ctx.rotate(angle);

	        //draw
	        ctx.beginPath();
            ctx.strokeStyle = pixels[i].color;

	        //LINE
            // ctx.moveTo(0 , 0);
            // var lineWidth = 1000/((mouseY - pixels[i].y) / Math.sin(angle));
            // lineWidth = (lineWidth > 20) ? 20 : lineWidth;
            // ctx.lineWidth = lineWidth
            // ctx.lineTo((-(mouseY - pixels[i].y) / Math.sin(angle))/10 , 0);

            //BLOB
            var lineWidth = 2000/((mouseY - pixels[i].y) / Math.sin(angle));
            lineWidth = (lineWidth > 200) ? 200 : lineWidth;
            ctx.lineWidth = lineWidth;
	        ctx.moveTo(0 , 0);
	        ctx.lineTo(0 , 0);

	        // TRIANGLE
	        // ctx.moveTo(-3, -3);
	        // ctx.lineTo(3 , 0);
	        // ctx.lineTo(-3 , 3);
	        // ctx.fill();

	        ctx.stroke();


        } 

    }
}

document.addEventListener('DOMContentLoaded', function() {
    // var needles = new Needles(document.getElementById('particles'), '#d53300', 500);
    var needles = new Needles(document.getElementById('particles'), '#383737', 200);
});

