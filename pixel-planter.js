function testTrunk() {

    //get canvas info & all that jazz
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //set width as random value within given range
    var minWidth = 10;
    var maxWidth = 24;
    var width = getRandomInt(maxWidth - minWidth) + minWidth;

    //ensures width is even
    width = width + (width % 2)

    //set height as random value within given range
    var minHeight = 60;
    var maxheight = 100;
    var height = getRandomInt(maxheight - minHeight) + minHeight;

    //ensures height is even
    height = height + (height % 2)

    //set color to brown
    ctx.strokeStyle = "#5a3d17";

    //draw trunk
    for (var i = 0; i < height; i++) {
        ctx.beginPath();
        ctx.moveTo(64 - (width / 2), 128 - i);
        ctx.lineTo(64 + (width / 2), 128 - i);
        ctx.stroke()
    }

    //for making random choices with binary options.
    var mult = [-1, 1];

    //set number of branches as random value within given range
    var maxBranches = 40;
    var minBranches = 5;
    var branches = getRandomInt(maxBranches - minBranches) + minBranches;

    //draw branches on tree
    for (var j = 0; j < branches; j++) {

        //ensures branch color is brown
        ctx.strokeStyle = "#5a3d17";

        //left = 0, right = 1
        var side = getRandomInt(2);

        //up = 0, down = 1
        var angle = getRandomInt(2);

        //randomly generate length of branch for generated side and angle
        var startx = 64 + (side % 2);
        var endx = startx + (mult[side] * getRandomInt(30));
        var starty = getRandomInt((2 * height) / 3) + (height / 3);
        var endy = starty + (mult[angle] * getRandomInt(height / 5));

        //draw banch
        ctx.beginPath();
        ctx.moveTo(startx, 128 - (starty));
        ctx.lineTo(endx, 128 - (endy));
        ctx.stroke();

        //draw vine at the end of branch
        addVine(22, ctx, endx, endy);
    }
}

//function for drawing a single green vine
function addVine(vineLength, ctx, startX, startY) {
    for (var i = 0; i < vineLength; i++) {
        ctx.beginPath();
        ctx.moveTo(startX + ((-1 * (i % 2)) * (Math.sin(i) / 5)), 128 - startY + i);
        ctx.lineTo(startX + ((-1 * (i % 2)) * (Math.sin(i + 1) / 5)), 128 - startY + (i + 1));
        ctx.strokeStyle = "#234705";
        ctx.stroke()
    }
}

//function for getting a random int from 0<max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}