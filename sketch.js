
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor=color(0)

	
    

    //Create the Bodies Here.
    box1 = new Box(1000,380,150,15);
	box2 = new Box(920,340,15,100);
	box3 = new Box(1080,340,15,100);
	paper= new Paper(50,10,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
 
}
function keyPressed() {

if   ( keyCode ==UP_ARROW){

	 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}

}	



