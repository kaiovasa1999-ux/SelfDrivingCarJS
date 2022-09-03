const canvas = document.getElementById("myCanvas")
canvas.height=window.innerHeight;
canvas.width=400;

const ctx =canvas.getContext("2d");
const car = new Car(200,100,30,50);

car.draw(ctx);

animate()

function animate(){
  car.update();
  car.draw(ctx);
  requestAnimationFrame(animate);
}