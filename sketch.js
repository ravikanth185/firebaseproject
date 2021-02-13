var database;
var gamestate,playercount;
var form,game,player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game= new Game()
game.getstate()
game.start()
}
function draw(){
  background("white");
  
  
  
}

