let dotRadius = 20
let rotation = 0

let rotationStep

const SPEED = 3
const CIRCLE_RADIUS = 160
const SPOKE_RADIUS = 160
const DX = SPEED * 0.01
const GRAY = 128

let baseCenter = {x:0, y:0}

function setup() {
  createCanvas(windowWidth, windowHeight)

  background(16)
  ellipseMode(RADIUS)
  baseCenter.x = width * 0.5
  baseCenter.y = height * 0.8 - CIRCLE_RADIUS
  rotation = 0
  pixelDensity(1.0)
}

function cycloid(radius, theta) {
  const x = radius * (theta - sin(theta))
  const y = radius * (1+cos(theta))

  return {x, y}
}

function draw() {

  rotation = -DX * (frameCount)
  background(16)
  drawSurface()
  drawBaseCircle()
  drawSpoke()
  drawDot()

}

function drawSurface() {
  noFill()
  strokeWeight(3)
  stroke(GRAY)
  line(0, height * 0.8, width, height * 0.8)
}

function drawBaseCircle() {
  noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)  
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*1.16, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
  noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*1.32, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*1.48, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*1.64, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*1.80, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*1.96, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*0.84, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*0.68, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*0.52, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*0.36, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*0.20, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  ellipse(baseCenter.x*0.04, baseCenter.y, CIRCLE_RADIUS, CIRCLE_RADIUS)
}

function drawSpoke() {
  noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x + (SPOKE_RADIUS * sin(rotation)) 
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation))
  line(baseCenter.x, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*1.16 + (SPOKE_RADIUS * sin(rotation+0.5))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation+0.5))
  line(baseCenter.x*1.16, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*1.32 + (SPOKE_RADIUS * sin(rotation+1))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation+1))
  line(baseCenter.x*1.32, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*1.48 + (SPOKE_RADIUS * sin(rotation+1.5))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation+1.5))
  line(baseCenter.x*1.48, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*1.64 + (SPOKE_RADIUS * sin(rotation+2))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation+2))
  line(baseCenter.x*1.64, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*1.80 + (SPOKE_RADIUS * sin(rotation+2.5))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation+2.5))
  line(baseCenter.x*1.80, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*1.96 + (SPOKE_RADIUS * sin(rotation+3))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation+3))
  line(baseCenter.x*1.96, baseCenter.y, x, y)	
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*0.84 + (SPOKE_RADIUS * sin(rotation-0.5))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation-0.5))
  line(baseCenter.x*0.84, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*0.68 + (SPOKE_RADIUS * sin(rotation-1))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation-1))
  line(baseCenter.x*0.68, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*0.52 + (SPOKE_RADIUS * sin(rotation-1.5))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation-1.5))
  line(baseCenter.x*0.52, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*0.36 + (SPOKE_RADIUS * sin(rotation-2))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation-2))
  line(baseCenter.x*0.36, baseCenter.y, x, y)
	
  noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*0.20 + (SPOKE_RADIUS * sin(rotation-2.5))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation-2.5))
  line(baseCenter.x*0.20, baseCenter.y, x, y)
	
	noFill()
  strokeWeight(3)
  stroke(GRAY)
  x = baseCenter.x*0.04 + (SPOKE_RADIUS * sin(rotation-3))
  y = baseCenter.y + (SPOKE_RADIUS * cos(rotation-3))
  line(baseCenter.x*0.04, baseCenter.y, x, y)
	
}

function drawDot(ren = this) {
  x = baseCenter.x + sin(rotation) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)

	x = (baseCenter.x*1.16 + sin(rotation+0.5) * SPOKE_RADIUS)
	y = (baseCenter.y + cos(rotation+0.5) * SPOKE_RADIUS)
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*1.32 + sin(rotation+1) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation+1) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*1.48 + sin(rotation+1.5) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation+1.5) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*1.64 + sin(rotation+2) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation+2) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*1.80 + sin(rotation+2.5) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation+2.5) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*1.96 + sin(rotation+3) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation+3) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*0.84 + sin(rotation-0.5) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation-0.5) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*0.68 + sin(rotation-1) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation-1) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*0.52 + sin(rotation-1.5) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation-1.5) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*0.36 + sin(rotation-2) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation-2) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*0.20 + sin(rotation-2.5) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation-2.5) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
	
	x = baseCenter.x*0.04 + sin(rotation-3) * SPOKE_RADIUS
	y = baseCenter.y + cos(rotation-3) * SPOKE_RADIUS
  ren.noStroke()
  ren.fill(255)
  ren.ellipse(x, y, dotRadius, dotRadius)
}




