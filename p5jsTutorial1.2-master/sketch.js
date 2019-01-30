function setup()
{
  createCanvas(700,500);

}
//I worked with Justin Cai
function draw()
{
	background(90,90,90)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(100,25,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(30,100,15);

	// modifies the thickness of the border of an object
	strokeWeight(3);


	fill(50,255,20);
	stroke(130,200,15);
	strokeWeight(20);

	rect(290,100,100,50);
	rect(150,100,100,50);

}
