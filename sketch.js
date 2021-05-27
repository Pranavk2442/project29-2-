const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, block1;

var polygon;
var hexagonImg;

numberOfBlocks = 15;
blockArray=[];


function preload(){

    backgroundImg = loadImage("bg.png");    

     hexgonImg=loadImage("polygon.png");

}

function setup(){
    
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;

   

    ground1=new Ground(1000, 700,10000,20);
    stand1=new Ground(1000,500,300,20);
    stand2=new Ground(700,320,300,20);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    block1=new Block(880,300,60,60);
    block2=new Block(940,300,60,60);
    block3=new Block(1000,300,60,60);
    block4=new Block(1060,300,60,60);
    block5=new Block(1120,300,60,60);
    block6=new Block(910,270,60,60);
    block7=new Block(970,270,60,60);
    block8=new Block(1030,270,60,60);
    block9=new Block(1090,270,60,60);
    block10=new Block(940,240,60,60);
    block11=new Block(1000,240,60,60);
    block12=new Block(1060,240,60,60);
    block13=new Block(970,210,60,60);
    block14=new Block(1030,210,60,60);
    block15=new Block(1000,180,60,60);

    block1a=new Block(580,100,60,60);
    block2a=new Block(640,100,60,60);
    block3a=new Block(700,100,60,60);
    block4a=new Block(760,100,60,60);
    block5a=new Block(820,100,60,60);
    block6a=new Block(610,70,60,60);
    block7a=new Block(670,70,60,60);
    block8a=new Block(730,70,60,60);
    block9a=new Block(790,70,60,60);
    block10a=new Block(640,40,60,60);
    block11a=new Block(700,40,60,60);
    block12a=new Block(760,40,60,60);
    block13a=new Block(670,10,60,60);
    block14a=new Block(730,10,60,60);
    block15a=new Block(700,-20,60,60);


    slingShot=new SlingShot(this.polygon,{x:300,y:400});

}

function draw(){

    background(0);

    Engine.update(engine);

  textSize(19);
  fill("white");
    text("Drag the hexagonal stone and release it, to launch it towards the blocks", 200,500);

    ground1.display();
    stand1.display();
    stand2.display();



    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
   block15.display();

   block1a.display();
    block2a.display();
    block3a.display();
    block4a.display();
    block5a.display();
    block6a.display();
    block7a.display();
    block8a.display();
    block9a.display();
    block10a.display();
    block11a.display();
    block12a.display();
    block13a.display();
    block14a.display();
   block15a.display();

   imageMode(CENTER)
   image(hexgonImg,polygon.position.x,polygon.position.y,40,40);
   slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

