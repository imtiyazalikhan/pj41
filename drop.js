class Drop{
constructor(x,y){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("images/drop.png")
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    
    rect(pos.x, pos.y, this.width, this.height);
  }
}
