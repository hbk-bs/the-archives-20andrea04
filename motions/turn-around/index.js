let angle = 0; // Aktueller Drehwinkel
let globeSize = 100; // Größe Globus

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke(); 
}

function draw() {
  background(0); // Farbmodell: RGB

  // Berechnet Rotation
  angle += 0.04; // Drehung mit konstantem Tempo

  // Zeichnet den Globus
  push();
  rotateY(angle); // Globus dreht sich um die Y-Achse
  fill(100, 150, 255); // Blauer Globus
  sphere(globeSize); // zeichnet Globus-Kugel mit Radius globeSize

  fill(0, 255, 0); // grüner Marker (Äquator vorne)
  push();
  translate(globeSize * 0.9, 0, 0); // Marker auf der Vorderseite
  sphere(15); // Kleiner Punkt
  pop();

  fill(0, 255, 0); // grüner Marker (Äquator hinten)
  push();
  translate(-globeSize * 0.9, 0, 0); // Marker auf der Rückseite
  sphere(15); // Kleiner Punkt
  pop();
  pop();
}
