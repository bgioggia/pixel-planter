function testTrunk(ctx) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var minWidth = 10;
    var maxWidth = 30;

    var width = getRandomInt(maxWidth - minWidth) + minWidth;

    //ensures width is even
    width = width + (width % 2)

    var minHeight = 60;
    var maxheight = 100;

    var height = getRandomInt(maxheight - minHeight) + minHeight;


    ctx.strokeStyle = "#5a3d17";

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