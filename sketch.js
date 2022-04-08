
var boy ,boy_running, leftBoundary, rightBoundary;
var pathImage;

function preload(){
boy_running=loadAnimation("Jake1.png","Jake2.png","Jake3.png", "Jake4.png", "Jake5.png");
pathImage=loadImage("path.png");

}

function setup(){
  
 path=createSprite(200,200); 
 path.addImage("path", pathImage);
 path.velocityY=4;
 path.scale=1.2;
 
  createCanvas(400,400)
 boy=createSprite(180,340,30,30);
 boy.addAnimation("running", boy_running); 
 boy.scale=0.7; 

 leftBoundary= createSprite(0,0,100,800);
 leftBoundary.visible=true;

 rightBoundary= createSprite(0,0,100,800);
 rightBoundary.visible=true;
}

function draw(){
  background("white")
  path.velocityY=4;

  boy.x= World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y>400){
    path.y=height/2;
  }

  drawSprites();
}

