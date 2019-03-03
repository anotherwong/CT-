
var b1;

function setup()
{
	createCanvas(500,500);

	//initializing (Set up) button 1 with x y height legnth values
	b1 = new Button(10,10,100,25);
	b1.setText("New game");
	b1.setTextOver("start");
	b1.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("easy/easy.html","_self");
	}
}
