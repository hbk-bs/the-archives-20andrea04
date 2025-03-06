let rectX, rectY; // Position des Rechtecks
let rectSize = 100; // Größe des Rechtecks
let fallingObjects = []; // Array für die fallenden Objekte
let objectSize = 50; // Größe der fallenden Objekte

function setup() {
  createCanvas(600, 600); // Zeichenfläche erstellen

  // Rechteck-Startposition
  rectX = width / 2 - rectSize / 2;
  rectY = height - rectSize;

  // Initiale fallende Objekte hinzufügen
  for (let i = 0; i < 5; i++) {
    addFallingObject();
  }
}

function draw() {
  background("lightblue");

  // Rechteck zeichnen
  fill("red")
  rect(rectX, rectY, rectSize, rectSize);

  // Fallende Objekte aktualisieren und zeichnen
  fill("green")
  for (let i = fallingObjects.length - 1; i >= 0; i--) {
    let obj = fallingObjects[i];
    obj.y += obj.speed; // Objekt fällt nach unten

    // Zeichne das Objekt (geometrische Formen variieren)
    if (obj.type === "circle") {
      ellipse(obj.x, obj.y, objectSize);
    } else if (obj.type === "rect") {
      rect(obj.x, obj.y, objectSize, objectSize);
    } else if (obj.type === "triangle") {
      triangle(
        obj.x - objectSize / 2,
        obj.y + objectSize / 2,
        obj.x + objectSize / 2,
        obj.y + objectSize / 2,
        obj.x,
        obj.y - objectSize / 2
      );
    }

    // Kollisionserkennung
    if (
      obj.x > rectX &&
      obj.x < rectX + rectSize &&
      obj.y + objectSize / 2 > rectY &&
      obj.y - objectSize / 2 < rectY + rectSize
    ) {
      fallingObjects.splice(i, 1); // Objekt entfernen
    }

    // Objekt entfernen, wenn es aus dem Canvas fällt
    if (obj.y > height) {
      fallingObjects.splice(i, 1);
    }
  }

  // Neue Objekte hinzufügen, wenn wenige übrig sind
  if (fallingObjects.length < 5) {
    addFallingObject();
  }
}

function mouseDragged() {
  // Rechteckposition aktualisieren
  rectX = mouseX - rectSize / 2;
  rectY = mouseY - rectSize / 2;
}

// Funktion, um ein neues fallendes Objekt zu erzeugen
function addFallingObject() {
  let obj = {
    x: random(objectSize / 2, width - objectSize / 2), // Zufällige X-Position
    y: -objectSize, // Start knapp außerhalb des oberen Canvas-Rands
    speed: random(2, 5), // Zufällige Geschwindigkeit
    type: random(["circle", "rect", "triangle"]) // Zufällige Form
  };
  fallingObjects.push(obj);
}

 
