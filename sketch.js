
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var waste,wasteImage ;
var dustbin,dustbinImage;
var line1,line2;

function preload()
{
	wasteImage = loadImage("paper.png");
  dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);

	waste=createSprite(80,350 , 10,10);
	waste.addImage(wasteImage);
	waste.scale=0.3;

	dustbin=createSprite(1050,300, 10,10);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.4;

line1 = createSprite(980,300,5,140);

line2 = createSprite(1050,380,140,5)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(250);

  if(keyCode === UP_ARROW){
	waste.velocityY= -3;
	waste.velocityX= 0;
}

if(keyCode === DOWN_ARROW){
	waste.velocityY= 3;
	waste.velocityX= 0;
}
if(keyCode === LEFT_ARROW){

	waste.velocityX= -3;
	waste.velocityY= 0;
	
}
if(keyCode === RIGHT_ARROW){

	waste.velocityX= 3;
	waste.velocityY= 0;
}

line1.visible = false;
line2.visible = false;
textSize(20);
text("put the waste in the dustbin from the top using the arrow",100,60)
  gameCompleted();
gameover();
  drawSprites();
 
}
 



function gameCompleted(){

if(waste.isTouching(dustbin)){

waste.velocityX = 0;
waste.velocityY = 0;


textSize(40);
text("THANKS FOR USING THE DUSTBIN",200,200);
}
}

function gameover(){

	if(waste.x<0||waste.x>1200||waste.y<0||waste.y>400){
waste.x = 80;
waste.y = 350;
	}
if (waste.isTouching(line1||line2)){

waste.x = 80;
waste.y = 350;


}

}

