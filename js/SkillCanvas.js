window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback, fps){
            window.setTimeout(function() {
                callback(new Date().getTime())
            }, 1000 / 60);
        }
    );
}();

var SkillCanvas = function(skillElem) {

    var cw, ch, ctx, lineWidth,
    canvas = skillElem.getElementsByTagName('canvas')[0],
    level = skillElem.getAttribute('data-level') * 2,
    duration = 1000,
    startTime = null,
    strokeColor = skillElem.getAttribute('data-color') || '#000',
    max = 10;
    
    createCTX();

    this.play = function() {
        window.requestAnimFrame(draw); 
    }

    function createCTX() {
        cw = canvas.width = canvas.offsetWidth, ch = canvas.height = canvas.offsetHeight;
        lineWidth = cw / 15
        ctx = canvas.getContext('2d');
    }

    function drawBackground() {

        var centerX = cw / 2;
        var centerY = ch / 2;
        var radius = (cw - lineWidth) / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = '#f7f7f7';
        ctx.stroke();        
    }

    function draw(timeStamp) {

        var currentLevel;

        if (!startTime) startTime = timeStamp;

        var delta = timeStamp - startTime;
        if(delta >= duration) {
            currentLevel = level;
        } else {
            window.requestAnimFrame(draw);
            currentLevel = level * delta / duration;
        }

        var centerX = cw / 2;
        var centerY = ch / 2;
        var radius = (cw - lineWidth) / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 1.5 * Math.PI, ((2 / max) * currentLevel * Math.PI) + 1.5 * Math.PI, false);
        ctx.lineWidth = lineWidth;
        var red = Math.floor((255 * currentLevel) / max);
        var green = (255 - Math.floor((40 * currentLevel) / max));
        var blue = (200 - Math.floor((200 * currentLevel) / max));
        var color = 'rgb(' + 255 +',' + 215 + ',' +  blue + ')';
        ctx.strokeStyle = color;
        // ctx.strokeStyle = 'gold';
        ctx.stroke();

        var score = Math.floor(currentLevel * 10)/10;

        ctx.font = "50px 'Josefin Sans'";

        ctx.fillStyle = 'rgb(255,215,0)';
        ctx.textAlign = "center";
        ctx.clearRect(cw/4,ch/4,cw/2,ch/2);
        ctx.fillText(score,cw/2,(ch/2) + 18);
    }

    drawBackground();

}

