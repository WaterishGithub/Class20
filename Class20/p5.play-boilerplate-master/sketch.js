var fixedRectangle, movingRectangle 
function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(400, 200, 50, 50);
  movingRectangle.shapeColor = "red"
  fixedRectangle = createSprite(250, 200, 20, 40)
  fixedRectangle.shapeColor = "red"
}

function draw() {
  background("green");  
  drawSprites();
}