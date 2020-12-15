class Box {
  constructor(x, y){
    var options = {
      'restitution':0.6,
      'friction':0.1,
      'density':0.1
}
  this.body = Bodies.rectangle(x, y, 30, 40, options);
  this.width = 30;
  this.height = 40;
  
  World.add(world, this.body);
    
    
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
};
