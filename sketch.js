
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 610);
	engine = Engine.create();
	world = engine.world;

	ground =new Ground(width/2,570,width,10);
	left =new Ground(900,515,20,120);
	right =new Ground(1100,515,20,120);
	
	
	var ball_options ={
		isStatic:false,
		restitution:0.3,
        friction:0,
		density:1.2
	}

	

	
	//Create the Bodies Here.
	ball= Bodies.circle(200,100,30,ball_options)
    World.add(world,ball)
	if(keyDown("UP_ARROW")){
		jump()
	}
		
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,30)

  ground.display()
  left.display()
  right.display()

  Engine.update(engine);

 
  jump()
  
  drawSprites();
 
}

function jump() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	
}

