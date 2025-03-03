const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	background("DarkSeaGreen");

	push();
	translate(width / 2, height / 2);
	rotate(90);
	const d = s(0.22); //d bestimmt Größe Kreis
	pop();

	fill("Pink");
	circle(100, 100, d / 2);
	fill("PeachPuff");
	ellipse(130, 130, d / 1.5);
	fill("MediumAquaMarine");
	ellipse(160, 160, d / 1.25);
	fill("LightBlue");
	ellipse(200, 200, d);
	fill("Lavender");
	ellipse(240, 240, d * 1.25);

	saveCanvas("mysketch", "png");
}


 
