//creating a variable called b1 (Stands for button 1)

var lvl1;

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);
  lvl1 = new Button(10,10,100,50);
  lvl1.setText("Level 1")
  lvl1.setTextOver("start")
  lvl1.showButton()

}

function draw()
{
  background(255,255,255)
  fill(255,0,0);
  lvl1.showButton()

  if (lvl1.getButtonState() == 1)
  {
    window.open("level1/index.html","_self")
  }

}
