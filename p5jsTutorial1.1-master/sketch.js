function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(90,90,90)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,255);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,100,100);
  rect(600,400,100,100);
  rect(0,400,100,100);
  rect(600,0,100,100);
  rect(300,200,100,100)



}
