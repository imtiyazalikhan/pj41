const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop;
var maxDrops=100;
function setup(){
   createCanvas(400,800);
   engine = Engine.create();
    world = engine.world;
    for(var i=0; i<maxDrops; i++){
        maxDrops.push(new createDrop(random(0,400), random(0,400)));
    }
    if(this.rain.position.y > height){

        Matter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
    drop = new Drop(10,10);
    ground = new Ground(200,height,400,10);
    umbrella=new Umbrella(200,400);
}

function draw(){
    background("black")
    Engine.update(engine);
    drop.display();
    ground.display();
    umbrella.display();
}   

