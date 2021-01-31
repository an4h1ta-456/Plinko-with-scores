const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var divisions = [];
var particles = [];
var particle;
var plinkos = [];

var count=0;
var divisionHeight=300;
var score =0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var c = 0; c <=width; c = c + 80) {
     divisions.push(new Divisions(c, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var e = 75; e <=width; e=e+50) 
    {
    
       plinkos.push(new Plinko(e,75));
    }

    for (var e = 50; e <=width-10; e=e+50) 
    {
    
       plinkos.push(new Plinko(e,175));
    }

     for (var e = 75; e <=width; e=e+50) 
    {
    
       plinkos.push(new Plinko(e,275));
    }

     for (var e = 50; e <=width-10; e=e+50) 
    {
    
       plinkos.push(new Plinko(e,375));
    }

     
    
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }  
}
 


function draw() {
  background("black");
  
  
  Engine.update(engine);
  ground.display();
 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
   
   
  
  for (var c = 0; c < divisions.length; c++) {
     divisions[c].display();
  }
  if(particle != null) {
    particle. display(); 
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 300) {
        score = score + 500;             
      } 
      if(particle.body.position.x > 300 && particle.body.position.x < 600 ) {
        score = score + 100;     
      } 
      if(particle.body.position.x > 600 && particle.body.position.x < 900 ) {
        score = score + 200;     
      } 
      particle = null;
      if( count >= 5) gameState = "end";  
    }

  }
  if(gameState === "end"){
    textSize(50);
    fill("red");
    text("GAME OVER",250,250);
  } 
  textSize(25) 
  text("Score : "+score,20,30);
  text("500",20,530);
  text("500",100,530);
  text("500",180,530);
  text("500",260,530);
  text("100",340,530);
  text("100",420,530);
  text("100",500,530);
  text("200",580,530);
  text("200",660,530);
  text("200",740,530);
}