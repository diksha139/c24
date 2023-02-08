
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn;
var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground1=Bodies.rectangle(100,200,100,20,ground_options);
  World.add(world,ground1)
  
  
   btn = createImg("up.png");
   btn.position(20,30);
   btn.size(50,50);

   btn.mouseClicked(vForce)






  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}



function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
  console.log(ground.position.y);

  Matter.Body.rotate(ground1,angle);

  push()
  translate(ground1.position.x,ground1.position.y)
  fill("brown");
  rotate(angle);
  rect(0,0,100,20);
  angle = angle+0.01;
  pop()
}

