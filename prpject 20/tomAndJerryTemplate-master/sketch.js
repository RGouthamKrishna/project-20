var BackgroundIMG;
var cat,mouse;

function preload() {
    //load the images here
    BackgroundIMG = loadImage("images/garden.png");
    catIMG = loadImage("images/cat1.png");
    standCatIMG = loadImage("images/cat4.png");
    catchCatIMG = loadImage("images/cat2.png");
    
    mouseIMG = loadImage("images/mouse2.png");
    teaseMouseIMG = loadImage("images/mouse3.png");
    happyMouseIMG = loadImage("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(200,600,20,5);
    mouse.addImage(mouseIMG);
    mouse.scale = 0.2;

    cat = createSprite(750,600,35,10);
    cat.addImage(catIMG);
    cat.scale = 0.2;
    //create tom and jerry sprites here

}

function draw() {

    background(BackgroundIMG);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width-mouse.width)/2){
        cat.addImage(catchCatIMG);
        mouse.addImage(happyMouseIMG);
    }

    drawSprites();
}


function keyPressed(){

    if(keyDown = "LEFT_ARROW"){
        cat.addImage(standCatIMG);
        mouse.addImage(teaseMouseIMG);
        cat.x = cat.x-10;

    }

  //For moving and changing animation write code here


}
