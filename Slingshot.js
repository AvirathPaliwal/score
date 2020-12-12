class Slingshot{
    constructor(b1, p2){
        var options = {
            bodyA: b1,
            pointB: p2,
            stiffness: 0.17,
            length: 12
        }
        this.shot = Matter.Constraint.create(options)
        this.p=p2
        World.add(world, this.shot);
        
    }
    fly(){
        this.shot.bodyA=null
    }
    comeback(myball){
        this.shot.bodyA = myball
    }
    display(){
        if(this.shot.bodyA){
            var posA = this.shot.bodyA.position;
            var posB = this.p;
            strokeWeight(6);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    
    }
}