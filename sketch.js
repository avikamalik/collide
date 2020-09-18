var moving
var fixed

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="green"
moving=createSprite(40, 20, 5, 50);
moving.shapeColor="green"
fixed.debug=true
moving.debug=true
//difference btw there x positions equal to sum of their half widths
}

function draw() {
   background(255,255,255);  
if (moving.x-fixed.x<moving.width/2+fixed.width/2&&
  fixed.x-moving.x<moving.width/2+fixed.width/2&&
  moving.y-fixed.y<moving.width/2+fixed.width/2&&
  fixed.y-moving.y<moving.width/2+fixed.width/2){
  fixed.shapeColor="red"
  moving.shapeColor="red"
}else{
  fixed.shapeColor="green"
  moving.shapeColor="green"
}
  moving.x=mouseX
  moving.y=mouseY
  drawSprites();
}