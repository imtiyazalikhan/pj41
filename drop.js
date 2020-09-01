class Drop extends BaseClass {
    constructor(x,y){
        var options ={
            isStatic: false
        }
            super(x,y,50,50);
            this.image=loadImage("images/drop.png")
    }
display(){
    
    super.display();
}
}