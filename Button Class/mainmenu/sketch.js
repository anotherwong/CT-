var b1;
var b2;
var b3;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("New game");
	b1.setTextOver("start");
	b1.setButtonOverFill(50,255,50);


	b2 = new Button(10,50,100,25)
	b2.setText("New Game (hard)")
	b2.setTextOver("start")
	b2.setButtonOverFill(50,255,50)

	b3 = new Button(10,100,100,25)
	b3.setText("Introduction)")
	b3.setTextOver("read")
	b3.setButtonOverFill(50,255,50)
}
function draw()
{
	background(255,255,255);

	b1.showButton();
	b2.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("Easy/easy.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open ("hard/hard.html","_self")
	}
	if (b3.getButtonState() == 1)
	{
		window.open ("instruction/instruction.html","_self")
	}
}
