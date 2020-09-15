//hi tehzeeb
var movingRect, fixedRect;
function setup() {
  createCanvas(800,600);
   movingRect = createSprite(400, 100, 30, 50);
   fixedRect = createSprite(400, 300, 30, 50);
movingRect.shapeColor="Red";
fixedRect.shapeColor= "White";
movingRect.velocityY=5;
fixedRect.velocityY=-5;
}

function draw() {
  background(0, 0 ,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) 
    {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
      {
        movingRect.velocityY = movingRect.velocityY *(-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
    
  
  drawSprites();
}