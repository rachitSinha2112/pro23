var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,holder1,holder2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

packageBody_option={
	isStatic:true,
	restitution:0.8
}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_option);
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 holder1=new Holder(400,650,200,20);
 holder2=new Holder(300,610,20,100);
 holder3=new Holder(500,610,20,100);
}


function draw() {

Engine.update(engine);
  

  ellipseMode(RADIUS)
  ellipse(packageBody.position.x,packageBody.position.y,20,20)
  background(0);


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
if( keyPressed){
	packageBody.velocityX=-2;
}
  drawSprites();
  holder1.display();
  holder2.display();
 holder3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)  
    
  }
}



