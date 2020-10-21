class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingk = Constraint.create(options);
        World.add(world, this.slingk);
    }

    display(){
        if (this.slingk.bodyA){
        var pointA = this.slingk.bodyA.position;
        var pointB = this.slingk.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
fly (){
this.slingk.bodyA=null;    
}    
}