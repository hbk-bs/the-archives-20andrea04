let x; // Position Kugel
let y; // Y-Position  Kugel (wird für Zick-Zack genutzt)
let speedX = 2; // Geschwindigkeit Kugel in X-Richtung
let amplitude = 120; // Größere Amplitude für die Zick-Zack-Bewegung
let period = 70; // Periode für die Zick-Zack-Bewegung (schneller)
let easeAmount = 0.05; // Grad der "Ease"-Effekt für weiches Bewegen
let direction = 1; // Richtung der X-Bewegung (1 = rechts, -1 = links)

function setup() {
  createCanvas(400, 400);
  x = 0; // Startposition Kugel x-Koordinate
  y = height / 2; // Startposition  Y-Koordinate
}

function draw() {
  background("lightblue"); 

  // Berechnet die Zick-Zack-Bewegung auf der Y-Achse (sinusförmig)
  let targetY = height / 2 + amplitude * sin(TWO_PI * (frameCount / period));

  // Sanfte Annäherung an die Zielposition (Ease)
  y += (targetY - y) * easeAmount;

  // Aktualisiert die X-Position der Kugel
  x += speedX * direction;

  // Wenn die Kugel den rechten Rand erreicht, dreht um
  if (x > width - 20) {
    direction = -1;
  }

  // Wenn die Kugel den linken Rand erreicht, dreht um
  if (x < 20) {
    direction = 1;
  }

  // Zeichnet die Kugel
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 20, 20);
}



