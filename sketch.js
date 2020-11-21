

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup,ground;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

createCanvas(600,600);  
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,9000,10);  
ground.velocityX=-4;
ground.x=ground.width/2;
  
score=0;
survivalTime=0;  
  
obstaclesGroup=new Group();
FoodGroup=new Group();  
  
}


function draw() {

background("white"); 
  
stroke("white");
textSize(20);
fill("white");
text("Score: "+score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());  
text("SurvivalTime: "+survivalTime,100,50);  
  
  
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);

 if(obstaclesGroup.isTouching(monkey)){
        
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
   
   
    }  
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }  
  
if(keyDown("space")) {
monkey.velocityY = -12;
}
  
obstacles();  
food();

drawSprites();  
  
}

function obstacles() {
  
  
  
  
if (frameCount % 300=== 0){
   var obstacle = createSprite(600,310,10,40);
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2;
  obstacle.velocityX = -(6 + score/100);
  obstacle.lifetime=150;
 
  obstaclesGroup.add(obstacle);
} 
  
}

function food(){
  
if(frameCount%80==0){
  
banana=createSprite(200,200,10,10);
banana.addImage(bananaImage);
banana.y=Math.round(random(120,200));
banana.velocityX=-4;
banana.lifetime=150;
banana.scale=0.1; 
FoodGroup.add(banana);  
    
}  
  
  
}







