let ball;
function setup(){
    new Canvas(600,400);
    world.gravity.y = 10
}
function draw(){
    if (mouse.presses('left')){
        spawnBall();
    }
}
function spawnBall(){
    ball = new Sprite(mouse.x,mouse.y,20);  //make s

}