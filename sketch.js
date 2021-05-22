var canvas, backgroundImage,roadimg,road,doracake,doracakeimg,
doremon,doremonimg,bgimg,obstacle,rat,car,stone,ground;

function preload(){
  doracakeimg = loadImage("doracake.png");
  doremonimg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
  roadimg = loadImage("base.png");
  bgimg=loadImage("bg.png");
  rat=loadImage("rat.png");
  car=loadImage("car.png");
  stone=loadImage("obstacle.png");
}

function setup(){
  canvas = createCanvas(1200, 1000);
  ground = createSprite(600,980,1200,30);
  ground.shapeColor="brown";
  ground.velocityX=-3;
  doremon=createSprite(100,900);
  doremon.addAnimation("running",doremonimg);
  doremon.scale=0.8;
  
}
function draw(){
background(bgimg);
createObstacles();
drawSprites();
}
function createObstacles(){
if(frameCount%200===0){
  obstacle=createSprite(1200,945);
var number=Math.round(random(1,3));

obstacle.velocityX=-3;
switch(number){
case 1:obstacle.addImage("1",rat);
obstacle.scale=0.2;
       break;
case 2:obstacle.addImage("2",stone);
obstacle.scale=0.2;
       break;      
case 3:obstacle.addImage("3",car);
obstacle.scale=0.5;
       break;
default:break;
}
}}
