// Anzahl der Reihen und Spalten
let rows = 10;
let cols = 10;
let grid = [];
let cellSize = 50;

// Setup für das p5.js Canvas
function setup() {
  let canvas = createCanvas(cols * cellSize, rows * cellSize);
  canvas.parent("p5-container");
  noStroke();

  // Initialisiere das Grid mit zufälligen Dreiecken oder weißen Zellen
  for (let y = 0; y < rows; y++) {
    let row = [];
    for (let x = 0; x < cols; x++) {
      if (random() < 0.15) {
        // 15% Wahrscheinlichkeit, dass ein Feld leer ist
        row.push(null);
      } else {
        // Zufällige Dreiecksrichtung (0-3)
        row.push(floor(random(4)));
      }
    }
    grid.push(row);
  }
}

// Zeichne das Raster
function draw() {
  background(255);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] !== null) {
        drawTriangle(x, y, grid[y][x]);
      }
    }
  }
}

// Zeichnet ein Dreieck basierend auf seiner Richtung
function drawTriangle(x, y, direction) {
  let x0 = x * cellSize;
  let y0 = y * cellSize;
  fill(0);

  push();
  translate(x0 + cellSize / 2, y0 + cellSize / 2);
  rotate((PI / 2) * direction);
  translate(-cellSize / 2, -cellSize / 2);
  triangle(0, 0, cellSize, 0, 0, cellSize);
  pop();
}

// Verschiebt eine Reihe nach links oder rechts
function shiftRow(row, direction) {
  if (direction === "left") {
    let first = grid[row].shift();
    grid[row].push(first);
  } else if (direction === "right") {
    let last = grid[row].pop();
    grid[row].unshift(last);
  }
}

// Verschiebt eine Spalte nach oben oder unten
function shiftCol(col, direction) {
  if (direction === "up") {
    let first = grid[0][col];
    for (let i = 0; i < rows - 1; i++) {
      grid[i][col] = grid[i + 1][col];
    }
    grid[rows - 1][col] = first;
  } else if (direction === "down") {
    let last = grid[rows - 1][col];
    for (let i = rows - 1; i > 0; i--) {
      grid[i][col] = grid[i - 1][col];
    }
    grid[0][col] = last;
  }
}

document
  .getElementById("screenshot-button")
  .addEventListener("click", function () {
    saveCanvas("screenshot", "png");
  });

 
