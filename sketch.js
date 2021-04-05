
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Events=Matter.Event
var Particles=[]
var Plinkoes=[]
var Divisions=[]
var divisionHeight=300
var Score=0

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
Ground=new ground(width/2,height,width,20)
for(var k=0;k<=width;k=k+80){
	Divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))
}
for(var j=75;j<=width;j=j+50){
	Plinkoes.push(new plinko(j,75))
}
for(var j=50;j<=width-10;j=j+50){
	Plinkoes.push(new plinko(j,175))
}
for(var j=75;j<=width;j=j+50){
	Plinkoes.push(new plinko(j,275))
}
for(var j=50;j<=width-10;j=j+50){
	Plinkoes.push(new plinko(j,375))
}

  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  textSize(20)
  Engine.update(engine)
  Ground.display()
  for(var i=0;i<Plinkoes.length;i++){
	  Plinkoes[i].display()
  }
  if(frameCount%60===0){
	  Particles.push(new particle(random(width/2-30,width/2+30),10,10))
	  Score++
  }
  for(var j=0;j<Particles.length;j++){
	Particles[j].display()
}
for(var k=0;k<Divisions.length;k++){
	Divisions[k].display()
}
}
