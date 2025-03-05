let x =0;
let y=0;
let radius =50;
let xSpeed= 1;
let ySpeed=1;

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  xSpeed = random(-5,5);
  ySpeed = random(-5,5);


  x = width/2;
  y= height/2;
}

function draw() {
  background(0,20);
  circle(x,y,radius);
  x += xSpeed;
  y += ySpeed;

  if(x> width - radius / 2 || x< radius/2) {
    xSpeed *=-1;
  }

  if (y>height - radius / 2 || y< radius /2) {
    ySpeed *= -1;
  }
}

