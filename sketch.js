var balloon;
var database;
var position;
var pictur;
function preLoad(){
} 
function setup(){
    database = firebase.database();
    createCanvas(800,700);
    balloon = createSprite(250,650,70,20);
    balloon.shapeColor="red";
    var ballposition = database.ref("balloon/position");
    ballposition.on("value",readPosition,showError)
}

function draw(){
    background("blue");
    if(keyDown(LEFT_ARROW)){
      balloon.x = balloon.x -10; 
    }
    else if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x +10; 
    }
    else if(keyDown(UP_ARROW)){
      balloon.y = balloon.y -10; 
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y +10; 
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("balloon/position").set({
        'x':position.x + x, 
        'y': position.y + y
    })
}

function readPosition(data){
    position=data.val();
    balloon.x = position.x;
    balloon.y = position.y;
}
function showError(){
    console.log("comeheretotalk");      
}
