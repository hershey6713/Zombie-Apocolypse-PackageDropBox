class Box {
    constructor(x,y,width,height) {
          this.bodies = Bodies.rectangle(x,y,width,height);
          this.width = width;
          this.height = height;
          Body.setStatic(this.bodies, true);
          World.add(world,this.bodies);
    }

    display() {
        rectMode(CENTER);
        fill(rgb(255, 0, 0));
        stroke(rgb(255,0,0));
        rect(this.bodies.position.x,((this.bodies.position.y)+(this.height/2)),this.width,this.height);
    }
}