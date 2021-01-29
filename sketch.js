
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	mango1=new mango(1100,110,30);
	mango2=new mango(1200,180,30);
	mango3=new mango(904,181,30);
	mango4=new mango(1000,190,30);
	mango5=new mango(923,240,30);
	mango6=new mango(989,111,30);
	mango7=new mango(1098,201,30);
	mango8=new mango(1064,47,30);
mango9=new mango(1171,130,30);
stone1=new Stone(242,307,60,2);
//=new Stone(242,310,25,29);
	treeObj=new tree(1050,580);
  groundObject=new ground(width/2,600,width,20);
  //s=new File(242,310,8,8);
	sling1=new Chain(stone1.body,{x:240,y:415});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  sling1.display();
  stone1.display();
  mango9.display();

 
  //stone2.display(); 

  groundObject.display();
  text("X"+mouseX+"Y"+mouseY,mouseX,mouseY);
}


function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:100,y:100});

}
function mouseReleased(){
  Stone1.fly();

}
