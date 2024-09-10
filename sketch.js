function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255, 255, 0);
  drawSimpleChernoffFace(width / 2, height / 2, 150);
}

function drawSimpleChernoffFace(x, y, size) {

  fill(255, 242, 232);
  ellipse(x, y, size, size);  // Round face
  
  // Eyes
  fill(0);
  let eyeSize = 20;
  let eyeDistance = 30;
  ellipse(x - eyeDistance, y - size / 5, eyeSize, eyeSize);
  ellipse(x + eyeDistance, y - size / 5, eyeSize, eyeSize);
  
  // Nose
  fill(100);
  triangle(x, y, x - 10, y + 20, x + 10, y + 20);
  
  // Mouth
  noFill();
  stroke(0);
  arc(x, y + size / 4, 50, 30, 0, PI);
}
