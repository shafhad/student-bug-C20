var bath, brush, drink, eat, gym, gym1, iss, move;
var background;
var astro, sleep;


function preload()
{
  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  gym1 = loadAnimation("gym11.png", "gym12.png");
  iss = loadImage("iss.png");
  //there was a comma in move1.png
  move = loadAnimation("move.png"," move1.png");
  sleep = loadImage("sleep.png");

}


function setup() {
  createCanvas(800,400);
  background = createSprite(400, 200, 50, 50);
  background.addImage("bg", iss);
  background.scale = 0.15
  

  astro = createSprite(200,200,20,20);
  astro.addAnimation("slp",sleep);
  astro.scale = 0.1;
  
  /*createEdgeSprites(edges);
  astro.bounceOff(edges);*/
}

function draw() 
{
  drawSprites();
  fill("red");
  text("Right Arrow" + "=" + "Bathing", 400,200);
  text("Left Arrow" + "=" + "Eating", 400,215);
  text("Up Arrow" + "=" + "Brushing", 400,230);
  text("Down Arrow" + "=" + "Exercising", 400,245);
  text("M Arrow" + "=" + "Moving", 400,260);
  
  if(keyDown("UP_ARROW"))
  {
    astro.addAnimation("brushing", brush);
    astro.changeAnimation("brushing");
    astro.y = 250;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW"))
  {
    astro.addAnimation("Exercising", gym, gym1);
    astro.changeAnimation("Exercising");
    astro.y = 250;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW"))
  {
    astro.addAnimation("Eating", eat);
    astro.changeAnimation("Eating");
    astro.y = 250;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    astro.addAnimation("Bathing", bath);
    astro.changeAnimation("Bathing");
    astro.y = 250;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  //not working student
  if(keyDown("m"))  {
    console.log("m");
    astro.addAnimation("Moving", move);
    astro.changeAnimation("Moving");
  //  astro.y = 250;
    astro.velocityX = 1;
    astro.velocityY = 1;
  }


}
