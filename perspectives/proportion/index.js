function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(400, 400);
	noStroke();
	const side = 40;

	for (let x = 0; x < width; x += side) {
		for (let y = 0; y < height; y += side) {
			fill(random(240, 320), random(50, 80), random(40, 70)); // wählt zufälligen Farbton (Hue), Sättigung und Helligkeit festlegen
			rect(x, y, side, side); // Zeichnet ein Quadrat
		}
	}
	fill(260, 70, 40); // Farbe für das große Quadrat
	rect(100, 100, side * 3, side * 3);

	saveCanvas("mysketch", "png");
}




 
