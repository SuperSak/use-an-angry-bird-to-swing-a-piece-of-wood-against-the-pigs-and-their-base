class Chain{
    constructor(bodyA, bodyB, s, l){
        var options = {
           length:l,
           stiffness:s, 
           bodyA:bodyA,
           bodyB:bodyB
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain);
    }
    display(){
        var pA=this.chain.bodyA.position
        var pB=this.chain.bodyB.position
        push()
        strokeWeight(4)
        line(pA.x,pA.y,pB.x,pB.y)
        pop()
        
    }
}