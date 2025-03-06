function setup() {
	createCanvas(400, 400);
	background("lightblue");

	let houseX = 50;
	let houseY = 250;
	let houseWidth = 100;
	let houseHeight = 100;

	let roofHeight = 50;

	let vanishingPointX = 350;
	let vanishingPointY = 75;

	rect(houseX, houseY, houseWidth, houseHeight);

	triangle(
		houseX,
		houseY,
		houseX + houseWidth / 2,
		houseY - roofHeight,
		houseX + houseWidth,
		houseY
	);

	line(
		houseX + houseWidth,
		houseY + houseHeight,
		vanishingPointX,
		vanishingPointY
	);
	line(houseX + houseWidth, houseY, vanishingPointX, vanishingPointY);
	line(
		houseX + houseWidth / 2,
		houseY - roofHeight,
		vanishingPointX,
		vanishingPointY
	);

	saveCanvas("mysketch", "png");
}


 
