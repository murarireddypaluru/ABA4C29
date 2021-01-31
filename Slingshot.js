class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 170, 20)
        image(this.sling2, 140, 20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke(45, 22, 8)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y-1.5, pointB.x-50, pointB.y-1.5);
            image(this.sling3, pointA.x-18, pointA.y-12, 15, 30)
            pop()
        }
    }
    
}