var yellow,red,green;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
  fill("black");
  rect(100, 50, 100, 300); 
  rect(140, 350, 20, 300);
}


function draw() {
  
  red = new Signal(150, 100, "red");
  red.appear() ;
  yellow = new Signal(150,200, "yellow");
  yellow.appear() ;
  green = new Signal(150,300, "green");
  green.appear() ;
  
  //Create objects for Green and yellow lights :
}
    

