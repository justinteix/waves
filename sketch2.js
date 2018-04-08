var value = 0;
var slider;

function setup() {
  createCanvas(800, 800);
  slider = createSlider(0,6,0,1);
}

function draw() {
  background(255);
  value = slider.value();
  //angle2 = 0.90*(slider.value());
  stroke(0,0,255);
  strokeWeight(10);
  translate(100,600);

if (value == 1) {
  branch11(150);
}

if (value == 2) {
  branch(150);
  branch22(150);
}

if (value == 3){
  branch(150);
  branch2(150);
  branch33(150);
}

if (value == 4){
  branch(150);
  branch2(150);
  branch3(150);
  branch44(150);
}

if (value == 5){
  branch(150);
  branch2(150);
  branch3(150);
  branch4(150);
  branch55(150);
}

if (value == 6){
  branch(150);
  branch2(150);
  branch3(150);
  branch4(150);
  branch5(150);
  branch66(150);
}

}

function branch(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/6);
}

function branch11(len){
  push();
  line(0,0,0,-len);
  pop();
  line(0,-len,300,0);
  translate(0,-len);
  rotate(PI/6);
}
function branch2(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/6);
}

function branch22(len){
  push();
  line(0,0,0,-len);
  pop();
  push();
  line(80,-40,350,0);
  pop();
  line(0,-150,80,-40);

  translate(0,-len);
  rotate(PI/6);
}

function branch3(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/6);
}

function branch33(len){
  push();
  line(0,0,0,-len);
  pop();
  push();
  line(80,-30,200,0);
  pop();
  line(0,-150,80,-30);
  line(360,-50,200,0);
}

function branch4(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/6);
}

function branch44(len){
  push();
  line(0,0,0,-len);
  pop();
  push();
  line(30,-20,80,50);
  pop();
  line(0,-150,30,-20);
  line(80,50,200,80);
  line(200,80,360,-70)
}

function branch5(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/6);
}

function branch55(len){
  push();
  line(0,0,0,-len);
  pop();
  push();
  line(100,100,30,-20);
  pop();
  line(0,-150,30,-20);
  line(100,100,170,130);
  line(170,130,270,70);
  line(270,70,330,-130);
}

function branch6(len){
  line(0,0,0,-len);
  translate(0,-len);
  rotate(PI/6);
}

function branch66(len){
  push();
  line(0,0,0,-len);
  pop();
  push();
  line(100,100,30,-20);
  pop();
  line(0,-150,30,-20);
  line(100,100,220,170);
  line(220,170,300,150);
  line(300,150,380,70);
  line(380,70,300,-150);
}
