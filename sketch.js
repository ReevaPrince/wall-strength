var car,wall ; 
var speed,weight,thickness ; 

function setup() {
 var canvas =  createCanvas(800,400);


 thickness = random(22,83)
  speed=random(250,350);
  weight=random(30,50);

 car =  createSprite(50,200,75,25);
 
 wall = createSprite(700,200,thickness,height/2);
 
 wall.shapeColor = color ("black");
}


function draw() {
  background("white");  

  car.velocityX = speed ; 

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /thickness*thickness*thickness ; 
      if(deformation > 6 )
      {
        wall.shapeColor = color("green");
      }
      if(deformation >15 ) 
      {
        wall.shapeColor = color("red");
      }
      
    } 
  drawSprites();
}