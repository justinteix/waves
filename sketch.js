var value = 0;
var slider;

function setup() {
  createCanvas(1000,800);
  slider = createSlider(0,6,0,1);
}

function draw() {
  background(255);
  value = slider.value();
  //angle2 = 0.90*(slider.value());
  stroke(0,0,255);
  strokeWeight(10);
  translate(100,700);

if (value == 1) {
  branch(150);
}

if (value == 2) {
  branch(150);
  branch2(150);
}

if (value == 3){
  branch(150);
  branch2(150);
  branch3(150);
}

if (value == 4){
  branch(150);
  branch2(150);
  branch3(150);
  branch4(150);
}

if (value == 5){
  branch(150);
  branch2(150);
  branch3(150);
  branch4(150);
  branch5(150);
}

if (value == 6){
  branch(150);
  branch2(150);
  branch3(150);
  branch4(150);
  branch5(150);
  branch6(150);
}

}

function branch(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/3);
}

function branch2(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/3);
}


function branch3(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/3);
}


function branch4(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/3);
}


function branch5(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/3);
}


function branch6(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/3);
}
