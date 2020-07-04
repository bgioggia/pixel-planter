function testTrunk(ctx) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var minWidth = 10;
    var maxWidth = 24;

    var width = getRandomInt(maxWidth - minWidth) + minWidth;

    //ensures width is even
    width = width + (width % 2)

    var minHeight = 60;
    var maxheight = 100;

    var height = getRandomInt(maxheight - minHeight) + minHeight;
    height = height + (height % 2)

    var totalPixels = height * width
    ctx.strokeStyle = "#5a3d17";
    for (var i = 0; i < height; i++) {
        ctx.beginPath();
        ctx.moveTo(64 - (width / 2), 128 - i);
        ctx.lineTo(64 + (width / 2), 128 - i);
        ctx.stroke()
    }

    var maxBranches = 40;
    var minBranches = 5;
    var branches = getRandomInt(maxBranches - minBranches);

    for (var j = 0; j < branches; j++) {
        //left = 1, right = 2
        var side = getRandomInt(2);
        //up = 1, down = 2
        var angle = getRandomInt(2);

        //clean this up with a +-1 later
        var startx;
        var endx;
        var starty;
        var endy;
        if (side === 1) {
            startx = 64;
            endx = 55 - getRandomInt(30);
            starty = getRandomInt(height / 2);
        } else {
            startx = 65;
            endx = 74 + getRandomInt(30);
        }
        if (angle === 1) {
            starty = getRandomInt((2*height) / 3) + (height / 3);
            endy = getRandomInt(height / 10) + starty;
        } else {
            starty = getRandomInt(height / 2) + (height / 2);
            endy = starty - getRandomInt(height / 5);
        }
        ctx.beginPath();
        ctx.moveTo(startx, 128-(starty));
        ctx.lineTo(endx, 128-(endy));
        ctx.stroke();
    }

  //  ctx.beginPath();
   // ctx.moveTo(100, 77);
  //  ctx.lineTo(80, 98);
 //   ctx.strokeStyle = "#234705";
 //   ctx.stroke()


    /*ctx.moveTo(90,100);
    ctx.lineTo(110,100);
    ctx.moveTo(90,99);
    ctx.lineTo(110,99);
    ctx.moveTo(90,98);
    ctx.lineTo(110,98);c
    ctx.moveTo(90,97);
    ctx.lineTo(110,97);
    ctx.moveTo(90,96);
    ctx.lineTo(110,96);
    ctx.moveTo(90,95);
    ctx.lineTo(110,95);
    ctx.moveTo(91,94);
    ctx.lineTo(111,94);
    ctx.moveTo(92,93);
    ctx.lineTo(112,93);
    ctx.moveTo(93,92);
    ctx.lineTo(113,92);
    ctx.moveTo(92,91);
    ctx.lineTo(112,91);
    ctx.stroke();*/
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}