var canvas;
var music;
var ball;
var surface1, surface2, surface3, surface4;

function preload(){
    
}


function setup(){
    canvas = createCanvas(1200, 800);

    //create 4 different surfaces

    surface1 = createSprite(50, 500, 300, 10);
    surface1.shapeColor = "yellow";

    surface2 = createSprite(300, 500, 300, 10);
    surface2.shapeColor = "green";

    surface3 = createSprite(550, 500, 300, 10);
    surface3.shapeColor = "pink";
    
    surface4 = createSprite(800, 500, 300, 10);
    surface4.shapeColor = "red"; 


    //create box sprite and give velocity
    ball = createSprite(Math.round(random(50, 700)), 400, 15, 15);
    ball.velocityY = 5;
    ball.velocityX = 5;
    

}

function draw() {

 

    background(rgb(255, 255, 255));
    //create edgeSprite
 createEdgeSprites();




ball.bounceOff(surface1);
ball.bounceOff(surface2);
ball.bounceOff(surface3);
ball.bounceOff(surface4);



if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
    ball.shapeColor = rgb(255, 255, 0);
}

if(surface2.isTouching(ball)  && ball.bounceOff(surface2)){
    ball.shapeColor = rgb(0, 128, 0);
}

if(surface3.isTouching(ball)  && ball.bounceOff(surface3)){
    ball.shapeColor = rgb(255, 192, 203);
}

if(surface4.isTouching(ball)  && ball.bounceOff(surface4)){
    ball.shapeColor = rgb(255, 0, 0);
}

drawSprites();
}
