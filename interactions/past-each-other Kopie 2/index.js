let ball1X; // Position der ersten Kugel (von links nach rechts)
let ball2X; // Position der zweiten Kugel (von rechts nach links)
let ballY1; // Y-Position der ersten Kugel (grün)
let ballY2; // Y-Position der zweiten Kugel (pink)
let ballSize = 50; // Größe der Kugeln
let target1; //Zielposition Kugel 1
let target2; //Zielposition Kugel 2

function setup() {
  createCanvas(400, 400);

  // Start- und Zielpositionen der Kugeln
  ball1X = 0; 
  target1 = width;

  ball2X = width;
  target2 = 0;

  ballY1 = height / 3; // Y-Position der grünen Kugel (etwas höher als die pinke)
  ballY2 = height / 2; // Y-Position der pinken Kugel (in der Mitte des Canvas)
}

function draw() {
  background(255);
  
  // Berechnung easing für beide Kugeln
  let easeFactor1 = 0.05; //Geschmeidigkeit
  ball1X += (target1 - ball1X) * easeFactor1;//Langsames Annähern an Ziel

  let easeFactor2 = 0.05;
  ball2X += (target2 - ball2X)* easeFactor2; 


//Sobald Ziel erreicht, wechseln Kugeln Richtung
  if (abs(ball1X - target1) < 1) {
    target1 = target1 === width ? 0 : width;
  }

  if (abs(ball2X - target2) < 1) {
    target2 = target2 === 0 ? width : 0;
  }
  // Zeichnen der ersten Kugel (grün, etwas höher)
  fill(0, 255, 0); // Grün
  noStroke();
  ellipse(ball1X, ballY1, ballSize, ballSize);

  // Zeichnen der zweiten Kugel (pink)
  fill(255, 0, 255); // Pink
  noStroke();
  ellipse(ball2X, ballY2, ballSize, ballSize);
}


 
