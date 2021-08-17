var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,OrangeleafImg;
var apple,orange;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}



if (frameCount % 80 === 0){
  if(appleImg,OrangeleafImg==1){
function createApples() {
  
  apple= createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.velocityY=3;

  apple.lifetime=200;
}
}

  function createorangeLeaf() {
    {
    orangeLeaf= createSprite(random(50,350),40,10,10)
    orangeLeaf.addImage(OrangeleafImg);
    orangeLeaf.velocityY=3;
  
    orangeLeaf.lifetime=200;
    }

  }