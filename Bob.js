class Bob{
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':0.35
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,50,50);
        pop();
    }
}

