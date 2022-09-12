class Car{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;


    this.speed =0;
    this.acceleration =0.25;
    this.maxSpeed =3;
    this.friction = 0.015;
    this.angle = 0;
    this.contrs = new Controls();
  }

  update(){
    this.#move();
  }
  
  #move(){
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
    if(this.speed !=0){
      const flip =this.speed>0?1:1;
      if(this.contrs.left){
        this.angle += 0.025 * flip;
      }
      if(this.contrs.right){
        this.angle -= 0.025 * flip;
      }
    }
    this.x -=Math.sin(this.angle)*this.speed;
    this.y -= Math.cos(this.angle)* this.speed;
  }


  draw(ctx){
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(-this.angle);
    ctx.beginPath();
    ctx.rect(
      - this.width/2,
      - this.height/2,
      this.width,
      this.height,
    )
    ctx.fill();

    // ctx.resore();
  }
}