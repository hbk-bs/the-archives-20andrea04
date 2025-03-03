let button;
let fallingObjects = []; // Array für alle fallenden Objekte
let imageURLs = [
  "https://hbk-bs.github.io/the-archives-20andrea04/assets/images/IMG_0468.jpeg",
  "https://hbk-bs.github.io/the-archives-20andrea04/assets/images/IMG_0462.jpeg",
  "https://hbk-bs.github.io/the-archives-20andrea04/assets/images/IMG_0465.jpeg",
  "https://hbk-bs.github.io/the-archives-20andrea04/assets/images/IMG_0464.jpeg",
  "https://hbk-bs.github.io/the-archives-20andrea04/assets/images/IMG_0463.jpeg"
];
let images = [];
let canvasWidth = 600;
let canvasHeight = 600;

function preload() {
  // Lade alle Bilder aus den URLs
  for (let url of imageURLs) {
    images.push(loadImage(url));
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // Erstelle den Button
  button = createButton("Make it rain!");
  button.position(canvasWidth / 2 - 50, canvasHeight - 50);
  button.mousePressed(startFallingObject);
}

function draw() {
  background("white");

  // Zeichne und bewege alle fallenden Objekte
  for (let i = fallingObjects.length - 1; i >= 0; i--) {
    let obj = fallingObjects[i];
    image(obj.image, obj.x, obj.y, 50, 50);
    obj.y += obj.speed;

    // Entferne das Objekt aus dem Array, wenn es den unteren Rand erreicht hat
    if (obj.y > height) {
      fallingObjects.splice(i, 1);
    }
  }
}

function startFallingObject() {
  // Wähle ein zufälliges Bild aus
  let randomIndex = floor(random(images.length));
  fallingObjects.push({
    image: images[randomIndex],
    x: random(width - 50), // Zufällige horizontale Position
    y: 0, // Startpunkt oben
    speed: 5 // Geschwindigkeit des Fallens
  });
}


 
