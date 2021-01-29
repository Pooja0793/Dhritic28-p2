class  Stone{
    constructor(x,y,r){
    
    this.body=Bodies.circle(x,y,r,{isStatic:false});
    this.r=r;
    this.image=loadImage("images/stone.png")
    this.height=height;
    World.add(world, this.body);
    
    
    
    }
    
    display(){
    
      imageMode(CENTER);
      push()
      
    translate(242,390);
    imageMode(CENTER);
    fill (255,0,255);
    rect(2,0,this.width,this.height);
    image(this.image,0, 0,this.r)
    pop ();
    }
}
    
    
    
    
    
    
