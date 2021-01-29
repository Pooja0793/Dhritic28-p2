class  Stone{
    constructor(x,y,width,height){
    
    this.body=Bodies.rectangle(x,y,width,height,{isStatic:false});
    this.width=width;
    this.image=loadImage("images/stone.png")
    this.height=height;
    World.add(world, this.body);
    
    
    
    }
    
    display(){
    
      imageMode(CENTER);
      push()
      
    translate(242,390);
    rectMode(CENTER);
    fill (255,0,255);
    rect(2,0,this.width,this.height);
    image(this.image,0, 0,this.width, this.height)
    pop ();
    }
}
    
    
    
    
    
    
