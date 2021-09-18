var car,car2,car3,car4,car5,collided;
var path;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
car=loadImage("car.png");
car2=loadImage("car1.png")
path=loadImage("path.png");
car3=loadImage("car3.png");
car4=loadImage("car4.png");
car5=loadImage("car5.png");
collided=loadImage("collided.png");

}

function setup() {
 createCanvas(600,400);

 car=createSprite(200,200,20,60);
 car.addImage(car);
 car.scale=0.2;

path=createSprite();
path.addImage(path);


carGroup=createGroup();
obstacleGroup=createGroup();

}

function draw() {

if(gameState===PLAY){
    car.y=World.mouseY;
    car.x=World.mouseX;
    path.velocityY=4;

    car2=createSprite(200,200,20,60);
    car2.addImage(car2);

    car3=createSprite(200,200,20,60);
    car3.addImage(car3);

    car4=createSprite(200,200,20,60);
    car4.addImage(car4);

    car5=createSprite(200,200,20,60);
    car5.addImage(car5);
    car5.scale=0.2
}
if(car.isTouching(obstacleGroup)){
    gameState===END
    path.velocityY=0;

    obstaleGroup.destroyEach();
    carGroup.destroyEach();

    collided=createSprite(200,200);
    collided.addImage(collided);
}
 drawSprite();
    drawSprite();

    r=Math.round(random(1,4));
    if (r == 1) {
      car2.addImage(car2);
    } else if (r == 2) {
      car3.addImage(car3);
    } else if (r == 3) {
      car4.addImage(car4);
    } else {
      car5.addImage(car5);
    }
}