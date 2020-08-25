//Create variables here
 var dog,  happyDog,Dog, database;
 var foodS, foodStock;
function preload()
{
  happyDog=loadImage("happydog.png");
  Dog = loadImage("Dog.png");
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,250,10,10);

  
 dog.addImage(Dog);
 dog.scale=0.15;
 database=firebase.database();
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
 
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
function draw() {  
  background(46,139,89);
  //image(Dog,210,210,100,100);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
 }
  drawSprites();
  
  fill(255,255,254);
  stroke("black")
  text("foodRemaining:"+foodS,100,75);
  textSize(13);
  text("Press up Arrow key to feed the dog",130,10,300,20);
}


  //add styles here

//}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })

}
