let ball;
function setup(){

    new Canvas(600,400);
    world.gravity.y = 10
    ground = new Sprite(0,600,600,30,'static');
    ground.bounciness = 1;
}
function draw(){
    background(0); //background to stop ball from leaving 'trail' on screen
    if (mouse.presses('left')){
        spawnBall();
    }
}
function spawnBall(){
    ball = new Sprite(mouse.x,mouse.y,20);  //make ball sprite spawn at mouse x mouse y and d=20


}
