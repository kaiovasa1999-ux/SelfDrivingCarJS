class Car{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;


    this.speed =0;
    this.acceleration =0.25;
    this.maxSpeed =2;
    this.friction = 0.015;
    this.contrs = new Controls();
  }

  update(){
    if(this.contrs.foward){
      this.speed +=this.acceleration;
    }
    if(this.contrs.reverse){
      this.speed -= this.acceleration;
    }
    if(this.speed > this.maxSpeed){
      this.speed = this.maxSpeed;
    }
    if(this.speed < -this.maxSpeed/2){
      this.speed = -this.maxSpeed/2;
    }
    if(this.speed > 0){
      this.speed -= this.friction;
    }
    if(this.speed < 0){
      this.speed += this.friction;
    }
    if(this.contrs.right){
      this.x +=2;
    }
    if(this.contrs.left){
      this.x -=2;
    }
    this.y -= this.speed
  }


  draw(ctx){
    ctx.beginPath();
    ctx.rect(
      this.x - this.width/2,
      this.y - this.height/2,
      this.width,
      this.height,
    )
    ctx.fill();
  }
}