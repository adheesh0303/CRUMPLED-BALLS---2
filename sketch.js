
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;
var groundBody, paperBody;
var paperImage, dustbinImage;
var paperSprite, dustbinSprite;

//Preload crumpled paper & dustbin images
function preload()
{
	paperImage = loadImage("paperImage.png")
	dustbinImage = loadImage("dustbinWHJ.png")

}


function setup() 
{
	createCanvas(800, 700);

	var options = 
	{
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}
	engine = Engine.create();
	world = engine.world;

	//Ground Sprite
	groundSprite = createSprite(width/2, height - 50, width,15);
	groundSprite.shapeColor = color("yellow");
	
	//Ground Body
	groundBody = Bodies.rectangle(width/2, height - 35, width,45,{isStatic:true})
	World.add(world,groundBody);

	//Paper Body
	paperBody = Bodies.circle(width-770,height-65,15,options);
	World.add(world,paperBody);	
	
	//PaperSprite
	paperSprite = createSprite(paperBody.position.x, paperBody.position.y, 10,10);
	paperSprite.addImage(paperImage)
	paperSprite.scale = 0.3;

	

	//Dustbin 
	log1 = Bodies.rectangle(600,635,100,15,{isStatic:true});
	World.add(world,log1);
	log2 = Bodies.rectangle(643,578,15,130,{isStatic:true});
	World.add(world,log2);
	log3 = Bodies.rectangle(554,578,15,130,{isStatic:true});
	World.add(world,log3);

	dustbinSprite = createSprite(598,575,120,120)
	dustbinSprite.addImage(dustbinImage);
	dustbinSprite.scale = 0.4;
	
	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(173, 216, 230);
  drawSprites();
  paperSprite.x = paperBody.position.x;
  paperSprite.y = paperBody.position.y;

}
function keyPressed()
{
	
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBody,{x:paperBody.position.x,y:paperBody.position.y},{x:32.5,y:-40});
	
	}

}




