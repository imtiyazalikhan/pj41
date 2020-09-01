const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
function preload(){}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    umbrella=new Umbrella(70,70)
}

function draw(){
background("white");
umbrella.display();
}   

