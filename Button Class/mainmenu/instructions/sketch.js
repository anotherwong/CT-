//creating a variable called b1 (Stands for button 1)

var inst;

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);
  inst = new Button(10,10,100,50);
  inst.setText("back")
  inst.setTextOver("Go")
  inst.showButton()

text("just click the buttons. It's that simple.",10,130);
}

function draw()
{
  //create a background using RGB values
  background(255,255,255)
  fill(255,0,0);
  lvl2.showButton()

  if (lvl2.getButtonState() == 1)
  {
    window.open("..mainmenu.html", "_self");
  }

}
