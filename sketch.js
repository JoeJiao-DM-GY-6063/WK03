function star(x, y, w, c) {
  let r = w / 2;

  push();

  translate(x, y);

  line(-c, -c, 0, -r);
  line(0, -r, c, -c);

  line(-c, c, 0, r);
  line(0, r, c, c);

  line(c, -c, r, 0);
  line(r, 0, c, c);

  line(-c, -c, -r, 0);
  line(-r, 0, -c, c);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120, 120, 120);

  strokeWeight(2);
  for (let y = 50; y < height; y += 100) {
    star(x, 50, 100, 5);
  }
  for (let x = 50; x < width; x += 120) {
    star(x, y, 110, 5);
 
  }
}



function draw() {}
