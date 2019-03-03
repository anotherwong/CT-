//creating a variable called b1 (Stands for button 1)

var lvl2;

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);
  lvl2 = new Button(10,10,100,50);
  lvl2.setText("Level 2")
  lvl2.setTextOver("Go")
  lvl2.showButton()

}

function draw()
{
  //create a background using RGB values
  background(255,255,255)
  fill(255,0,0);
  lvl2.showButton()

  if (lvl2.getButtonState() == 1)
  {
    window.open("../../../mainmenu/mainmenu.html");
  }

}
