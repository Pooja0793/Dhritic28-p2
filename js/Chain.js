class Chain {

        constructor(bodyA,pointB)
    {
        var options={
    lenght:10,
    stiffness:0.04,
    bodyA:bodyA,
    pointB:pointB
    
        }
        this.pointB=pointB;
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    
    }
    display(){
       push ()
    var posA=this.chain.bodyA.position;
    var posB=this.pointB;
 
		
    strokeWeight(5);
     line (posA.x,posA.y,posB.x,posB.y);
     pop ()
    
    }
    fly(){
        this.chain.bodyA =null;
        }
    
    }
