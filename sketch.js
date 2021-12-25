var jungleimg,player,goldimg
var parachuteimg,snakeimg,giraffee1img;
var playerimg, giraffeimg, queImg;
var playerthinkingimg, chance;
var elephantimg;
var gameState = "level1";
var key;


function preload(){
  jungleimg = loadImage("images/jungle1.jpg")
  goldimg = loadImage("images/gold.gif")
   parachuteimg = loadImage("images/parachute.png")
  snakeimg = loadImage("images/snake-unscreen.gif")
  playerimg = loadImage("images/player.png")
  giraffeimg = loadImage("images/giraffee obstacle.gif")
  queImg = loadImage("images/question.png")
  giraffee1img = loadImage("giraffblack.png")
  playerthinkingimg = loadImage("playerthinking.png")
}
// sameera share the live server with me
function setup() {
  createCanvas(displayWidth, displayHeight);
  player = createSprite(0,displayHeight-50,20,60)
  player.addImage('walking',playerimg);
  obstacle = new Obstacle(displayWidth-470,displayHeight-180,100,170);
  question = createSprite(displayWidth-470,displayHeight-80,100,170)
 
}

function draw() {
  background(0);
 
  if(gameState === "level1"){
    image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
    
    drawSprites();
  if(keyDown("right")){
    player.x=5+player.x
    }
  if(player.isTouching(obstacle.ob)){
    //  obstacle.ob.addImage(giraffeimg)
     // obstacle.ob.scale = 0.5;
      gameState = "question"
    }
    camera.position.y = player.y;
  camera.position.x = player.x;
  }
  else if (gameState === "question"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
    drawSprites();
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(50)
   text("A long neck!", displayWidth/2-300, displayHeight-200)
   text("Four legs! I love leaves! ", displayWidth/2-300, displayHeight-100)
   fill("brown");
   text("Can u guess, Who am I?", displayWidth/2-200, displayHeight)
  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-300, displayHeight-180)
   obstacle.go.position(displayWidth/2, displayHeight-180)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   num = chance.localeCompare("giraffe")
   console.log(num)

    if(chance.localeCompare("giraffe") === 0){
     
      gameState = "wow";
      
    }
   });

  }
 else if (gameState === "wow") {
   
  image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  key = createSprite(displayWidth/2-200, displayHeight/2+300);
 
  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
  obstacle.ob.addImage(giraffeimg);
  obstacle.ob.scale = 0.5;
  

  
  if(keyDown("right")){
    player.x=5+player.x
    }

    camera.position.y = player.y;
  camera.position.x = player.x;

  if(player.isTouching(key)){
    gameState = "level2"
  }

 
  
  drawSprites();
 }

  else if ( gameState === "level2"){
   // 1. image
   // 2. player moving
   //3. obstacle 
 image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
 key.destroy();
 drawSprites();
    player.x = 0;
    player.y = displayHeight - 50;

    obstacle.ob.x  = displayWidth-470;
    obstacle.ob.y = displayHeight-180;
 camera.position.y = player.y;
 camera.position.x = player.x;
 if(keyDown("right")){
   player.x=5+player.x
   }

 if(player.isTouching(obstacle.ob)){
  // gameState = "question"
 }
 
 /* question.x = displayWidth/2
 question.addImage(queImg);
//player.changeAnimation('walking',playerthinkingimg);
player.x =displayWidth/2-600;
question.scale = 1.8; 
textSize(50)
text("which is the heaviest ", displayWidth/2-300, displayHeight-200)
text("animal on land ", displayWidth/2-300, displayHeight-100)
fill("black");
text("Answer",displayWidth/2-200, displayHeight+50)
obstacle.ans.position(displayWidth/2-300, displayHeight-180)
obstacle.go.position(displayWidth/2, displayHeight-180)
 chance = obstacle.ans.value();
 //console.log(chance);
//obstacle.goButton();

//ans.position(displayWidth/2-300, displayHeight-18)

obstacle.go.mousePressed(() => {
 console.log(chance);
 chance.toLowerCase();
chance= chance+"";
num =chance.localeCompare("elephant")
console.log(num)


if(chance.localeCompare("false") === 0){
  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
  obstacle.ob.addImage(giraffeimg);
  obstacle.ob.scale = 0.5;
 // console.log("great!!")
  gameState = "level2";
  
} */


  }
}