var ball;
var vx = 12;
var edges

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);

  edges=createEdgeSprites()
  ball.velocity.x = vx;
}

function draw() 
{
  background(51);
  //if(ball.position.x<=50 || ball.position.x>=width-50)
  //{
    //vx= -vx;
  //}
  ball.bounceOff(edges)

 
  drawSprites();

}

