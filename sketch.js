var canvas, music, edges;
var box1, box2, box3, box4, squid, invis;

function preload(){
    //preload the music
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100, 580, 100, 20);
    box1.shapeColor = "blue";
    box2 = createSprite(300, 580, 100, 20);
    box2.shapeColor = "green";
    box3 = createSprite(500, 580, 100, 20);
    box3.shapeColor = "yellow";
    box4 = createSprite(700, 580, 100, 20);
    box4.shapeColor = "orange";

    //create invisible wall
    invis = createSprite(400,0,800,1100);
    invis.visible = false;

    //create box sprite and give velocity
    squid = createSprite(400, 200, 40, 40);
    squid.velocityY = 3;
    squid.velocityX = 3;
}

function draw() {
    //create canvas
    background(rgb(169,169,169));

    //write condition to check if box collide
    if (squid.isTouching(box1)) {
        squid.shapeColor = "blue";
    }

    if (squid.isTouching(box2)) {
        squid.shapeColor = "green";
    }

    if (squid.isTouching(box3)) {
        squid.shapeColor = "yellow";
    }

    if (squid.isTouching(box4)) {
        squid.shapeColor = "orange";
    }

    else if (squid.isTouching(invis)){
        squid.shapeColor = "white";
    }

    //create edgeSprite
    edges = createEdgeSprites();
    squid.bounceOff(edges);

    drawSprites();
}