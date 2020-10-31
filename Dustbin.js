class Dustbin {

    constructor(x,y,width,height) {
        var options = {
            isStatic : false
           
        }

        this.body = Bodies.rectangle(x,y,height,width,options);
        this.height = height;
        this.width = width;
Matter.Body.setAngle(this.body.angle);
        World.add(world.this.body);
    }

    display(){
       var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255)
        rect(pos.x,pos.y,this.width,this.height);



    }

}