class paperclass{
    constructor(x,y,lenth,height){
       var  options={
            isStatic  :false,
            restitution:0.3,
            friction:0.5,
            density:0.2,
        }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY
           var angle=  this.body.angle;
           push();
           translate(pos.x,pos.y);
           rotate(angle);
            fill("red");
            rect(0, 0, this.width, this.height);
            pop();
      }
  

}