var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.tint = "red";

  movingRect = createSprite(400, 200, 40, 40);
  movingRect.tint = "red";

}

function draw() {
  background(0, 0, 0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x && 
    fixedRect.width/2 + movingRect.width/2 > fixedRect.x - movingRect.x && 
    fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y &&
    fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y){
    movingRect.tint = "green";
    fixedRect.tint = "green";
  }else{
    movingRect.tint = "red";
    fixedRect.tint = "red";
  }
  
  drawSprites();
}