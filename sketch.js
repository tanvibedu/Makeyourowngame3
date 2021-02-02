const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  character = new Character(500, 200, 5 ,5);
  helper = new Helper(300,200,5,5);
  hacker = new Hacker(700,200,5,5);
  police = new Police(100,200,5,5);
  parents = new Parents(100,500,5,5);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  character.display();
  helper.display();
  hacker.display();
  police.display();
  parents.display();
}