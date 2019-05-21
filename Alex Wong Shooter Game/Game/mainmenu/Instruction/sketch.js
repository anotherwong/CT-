//creating a variable called b1 (Stands for button 1)
var b1;

function setup()
{
	createCanvas(500,500);

	//initializing (Set up) button 1 with x y height legnth values
	b1 = new Button(10,10,100,25);
	b1.setText("Return to menu");
	b1.setTextOver("Start");
	b1.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);
	text("Use W,A,S,D to move spaceship. Use spacebar to fire. ", 50, 200);
	text("Do not let the spaceship touch the falling numbers. ", 50, 300);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../mainmenu.html", "_self");
	}
}
