var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 300;
  button2Y = 300;


}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+350)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,300,100,50);
	}
	else
	{
		fill(0,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,300,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Alex Wong",25,325);




	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(100,100,100);
		stroke(51,70,190);
		textSize(16);
		text("Wong",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Wong",button2X+30,button2Y+30);
	}

}
