//variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var gameState = "Presentation"
var presentation;

//cargar los objectos
function preload(){
  
}

//configuración
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  presentation = new Presentation(500, 500, 50, 50);

  
}

console.log("Estado de juego: ", gameState)

//dibujo
function draw() 
{
  background(51);
  
if(gameState === "Presentation")
{
  background(51);
  presentation.display();
}

  
  Engine.update(engine);
  
}

