//let hand;
let bone;
let boxc;
function preload() {
  boxc = loadImage("bground.jpg");
  bone = loadImage("tower.png");
}
function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke("#AEA294");
  strokeWeight(26);
  translate(width / 2, height - height / 3);
  angleMode(DEGREES);

  boxc.resize(width/4,0)
   //bone.resize(0,height*0.9)

  imageMode(CENTER);
  //branch(300, 4,65);
  frameRate(25);
}

function draw() {
  //resetMatrix()
   background(0);
  image(boxc,width / 2, height-boxc.height/2)
  translate(width*0.495, height-boxc.height/7.5);




 
 
  branch(500, 7, frameCount % 360);
}

function branch(len, d, theta) {
  if (d == 0) return;

  translate(0, -len);
  let newLen = len * 0.77;
  let newD = d - 1;

  push();
  rotate(theta);
  branch(newLen, newD, theta);
  pop();

  push();
  rotate(-theta);
  branch(newLen, newD, theta);
  pop();

  // Draw this branch's image on top, preserving aspect ratio
  translate(0, len / 2);
  let aspect = bone.width / bone.height;
  image(bone, 0, 0, len * aspect, len);
  translate(0, -len / 2);
}