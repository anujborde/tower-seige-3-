class Block{
    constructor(x, y, width, height ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.visibility=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed)
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink")
rect( 0, 0, this.width, this.height);
        pop();
      }
else{
  World.remove(world,this.body)
  push();

this.visibility=this.visibility-5
pop();

}
      }

      score(){
        if(this.visiblity<0 && this.visiblity>-105){
        score++
        }
        
        }

}