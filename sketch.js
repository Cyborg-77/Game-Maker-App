var canvas;

var screenWidth, screenHeight;

function setup(){
    if(screenWidth!=null && screenHeight!=null){
        canvas = createCanvas(screenWidth,screenHeight);
    }
     else {
         canvas = createCanvas(200,200);   
    }

    form = new Form();

    
}



/*1. how to create in put box- Car game
2. how to pass the input value - Car game
3. create buttons - car game */

 function draw(){
form.display();


 }