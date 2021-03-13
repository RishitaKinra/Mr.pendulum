
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(windowWidth/2,100,500,25);
	bobObject= new Bob(windowWidth/2-200,550);
	bobObject2= new Bob(windowWidth/2-100,550);
	bobObject3= new Bob(windowWidth/2,550);
	bobObject4= new Bob(windowWidth/2+100,550);
	bobObject5= new Bob(windowWidth/2+200,550);

	rope1 = new Rope(bobObject.body,roof.body, -200,0);
	rope2 = new Rope(bobObject2.body,roof.body, -100,0);
	rope3 = new Rope(bobObject3.body,roof.body, 0,0);
	rope4 = new Rope(bobObject4.body,roof.body, 100,0);
	rope5 = new Rope(bobObject5.body,roof.body, 200,0);

	Engine.run(engine);
  
}


function draw() {
	background(500,0,50);

	Engine.update(engine);

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();
	bobObject.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
  
	drawSprites();
	keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject.body, bobObject.body.position, {x:-400,y:0});
	}
}