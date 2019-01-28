function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(0,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,255);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,300,300);
  rect(300,300,300,300)

}
