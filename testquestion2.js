let ball;
function setup(){

    new Canvas(600,400);
    world.gravity.y = 10
    ground = new Sprite(300,400,600,30,'static');
    ground.bounciness = 0.3;
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
