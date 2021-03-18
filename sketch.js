var car,wall;
var speed, weight
var Deformation;
function setup() {
  
  createCanvas(800,400);
  car = createSprite(50,100,20,21)
  car.shapeColor = "cyan"
  wall = createSprite(500,100,20,100)
  wall.shapecolor= "orange"
speed=random (5,20)
weight=random (100,1180)


}
function draw() {
  background("black");  
  car.velocityX = speed
  isTouching()
  drawSprites()
  
}
function isTouching()
{
  if(car.x-wall.x <= car.width/2+ wall.width/2  && wall.x-car.x <=car.width/2+ wall.width/2
     && car.y-wall.y <=car.height/2+ wall.height/2
    && wall.y-car.y<=car.height/2+ wall.height/2)

  {
    car.velocityX= 0
    Deformation = (0.5 * weight*speed*speed)/2250
    console.log(Deformation)
    if(Deformation <= 100 ){
      car.shapeColor="green"
  }
  if( Deformation >100 &&  Deformation <= 180)
  {
    car.shapeColor="yellow"
  }
  if( Deformation > 180)
  {
    car.shapeColor= "red"
  }
    
  }
  else{
    car.shapeColor="cyan";
    wall.shapeColor="orange"
  }
}
