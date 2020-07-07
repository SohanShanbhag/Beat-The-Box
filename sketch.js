const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = "serve";

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,770,1200,10);
  ground2 = new Ground(400,570,1200,10);
  ground3 = new Ground(800,370,1200,10);

  wall = new Bin(1200,400,10,1200);
  wall2 = new Bin(0,400,10,1200);
  wall3 = new Bin(600,800,1200,10);
  wall4 = new Bin(600,0,1200,10);

  binV1 = new Bin(900,160,10,100);
  binV2 = new Bin(1100,160,10,100);
  binH = new Bin(1000,210,210,10);

  ball = new Ball(50,745,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);

  //if(gameState === "serve"){
    //background("yellow");
    //textSize(40);
    //textStyle(BOLD);
    //text("BEAT THE BOX",500,100);
    //textSize(30);
    //text("Navigate the Ball using the Arrow Keys. Help the Ball reach the Box.", 100,300)
    //text("Press the SPACE Key to Start the Game.", 300, 500);

    //if(keyDown === SPACE){
      //gameState = "play";
    //}
  //}

  if(gameState === "serve"){
    background("red");

    ground.display();
    ground2.display();
    ground3.display();
    binV1.display();
    binV2.display();
    binH.display();
    ball.display();
    wall.display();
    wall2.display();
    wall3.display();
    wall4.display();
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {x:0, y:-183});
  }

  if(keyCode === DOWN_ARROW){
     Matter.Body.setStatic(ball.body, false);
  }

  if(keyCode === LEFT_ARROW){
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-100, y:0});
  }

 if(keyCode === RIGHT_ARROW){
  Matter.Body.setStatic(ball.body, false);
  Matter.Body.applyForce(ball.body, ball.body.position, {x:100, y:0});
  }
}