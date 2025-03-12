let smallBallRadius = 16; // Radius kleine rote Kugel
let bigBallRadius = 30; // Radius der große grüne Kugel
let smallBallLX; // X-Position kleine roten Kugel
let smallBallLY; // Y-Position der kleinen roten Kugel
let bigBallX; // X-Position große grüne Kugel
let bigBallY; // Y-Position der große grüne Kugel
let direction = 1; // 1 für Bewegung nach rechts, -1 für Bewegung nach links
let easing = 0.04; // Easing-Faktor

function setup() {
  createCanvas(400, 400);

  // Setzt Positionen
  bigBallX = width / 2;
  bigBallY = height / 2;
  smallBallLY = bigBallY; //kleine Kugel bewegt sich in der Mitte der großen
  smallBallLX = smallBallRadius; // Startet nahe dem linken Rand
}

function draw() {
  background(255);

  // Bewegung kleine rote Kugel
  let targetX = direction === 1 ? width - smallBallRadius : smallBallRadius; // Ziel: rechts oder links
  let dx = targetX - smallBallLX; // Abstand zwischen Kugel und Ziel
  smallBallLX += dx * easing; // Bewegung mit Verlangsamung (Easing)

  // Wenn Kugel fast Ziel erreicht hat, Richtung ändern
  if (abs(dx) < 1) {
    direction *= -1; // Richtung umkehren
  }

  //obere Hälfte der großen grünen Kugel
  fill(0, 255, 0);
  noStroke();
  arc(bigBallX, bigBallY, bigBallRadius * 2, bigBallRadius * 2, PI, TWO_PI);

  //kleine rote Kugel
  fill(255, 0, 0);
  ellipse(smallBallLX, smallBallLY, smallBallRadius * 2);

  //untere Hälfte der großen grünen Kugel
  fill(0, 255, 0);
  arc(bigBallX, bigBallY, bigBallRadius * 2, bigBallRadius * 2, 0, PI);
}




