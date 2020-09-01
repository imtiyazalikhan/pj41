class  Umbrella extends BaseClass {
    constructor(x,y){
      var options = {
        isStatic: true
    }
      super(x,y,50,50);
      this.image = loadImage("sprites/umbrella.png");
    }
    
    display() {
  
      super.display();
    }
  }
  