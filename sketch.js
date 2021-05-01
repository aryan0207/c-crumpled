
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;
var paper1;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
     
  
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=Bodies.rectangle(width/2,400,width,10,{
	isStatic:true	
	});
	dustbin1=new dustbin(720,390,100,10);
    paper1=new paper(100,300,10)

   world.add(world,ground);
}


function draw() {
 background("black")
 rectMode(CENTER);
  background(0);
 

  paper1.display();
  dustbin1.display();



function keyPressed(){
	if(keyCode===UP_ARROW){
	matter.Body.applyForce(paper1.body,paper1.body.position,{
	x:12,
	y:-13
	});
}
	}
}
