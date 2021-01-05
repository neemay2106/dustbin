
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new paperclass(700,320,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
paper.dispaly();
  drawSprites();
                 
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobjet.body,paperobject.body.position,{x:85,y:-85});
	}
}




