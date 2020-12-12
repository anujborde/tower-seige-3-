class Polygon {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          
          density:1.2,
friction:0.7
      }
      this.image=loadImage("polygon.png")
      this.body = Bodies.circle(x,y,r,options);
      //this.width = width;
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.image,pos.x, pos.y, this.r, this.r);
    }
  };
