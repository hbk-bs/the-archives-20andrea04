let ball; //Vektor für Position Kugel
let easeFactor = 0.0003; // Kleinerer Wert für langsamere Bewegung
let ballRadius = 20;
let startY = 0;
let endY;
let yPos; //aktuelle vertikale Position Kugel
let speed = 0;

function setup() {
  createCanvas(400, 400);
  //Kugel wird am oberen Rand des Canvas gestartet
  ball = createVector(width / 2, startY);
  endY = height - ballRadius; // Zielpunkt: unterer Rand des Canvas
  yPos = ball.y;
}

function draw() {
  background("lightblue");
  
  // Berechnet die Reststrecke zur unteren Grenze
  let distanceToGo = endY - yPos;
  
  // Sanfte Bewegung mit Ease:
  speed += distanceToGo * easeFactor; // Geschwindigkeit durch den Ease-Faktor beeinflusst
  yPos += speed; // Die Kugel bewegt sich um die berechnete Geschwindigkeit
  
  // Zeichne Kugel
  fill(255, 0, 0);
  noStroke();
  ellipse(ball.x, yPos, ballRadius * 2, ballRadius * 2);
  
  // Wenn Kugel unteren Rand erreicht, zum oberen Rand zurück --> Loop 
  if (yPos >= endY) {
    yPos = startY; // Zurück zum Anfang
    speed = 0; // Geschwindigkeit zurücksetzen, damit Kugel nicht zu schnell wird
  }
}



