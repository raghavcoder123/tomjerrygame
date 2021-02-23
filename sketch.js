
function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(0,0,600,600);
    garden.addImage(gardenImage);
    garden.scale = 2.5
}

function draw() {

    background(220aass);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
