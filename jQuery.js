var playing = false;
var score;
var trialsLeft;
var step;
var action;//used for setInterval
var fruits = ['apple','banana','cherries','grapes','mango','orange','pear','pineapple','watermelon'];
$(function(){
    //click on start reset button
   $("#startreset").click(function(){
       //we are playing
       if(playing == true){
          location.reload();
          }
       else{
              //we are not playing
              playing = true;
              
              //set score to 0
              score =0;//set score to 0 
              $("#scorevalue").html(score);
               
              //show trials left
              $("trialsLeft").show();
              trialsLeft = 3;
             addHearts();
		   
		   //hide game over box
		   $("#gameOver").hide();
           
            //chang button text to "restart game"
           $("#startreset").html("Reset Game");
           
           //start sending fruites
           startAction();

          }
   });

   $("#fruit1").mouseover(function(){
	   score++;
	   $("#scorevalue").html(score);//update score
	   
//	   document.getElementById("slicesound").play();
	   $("#slicesound")[0].play(); //play sound
	   
	   //stop fruit 
           clearInterval(action);
	    
	   //hide fruit
	   $("#fruit1").hide("explode",500);//slice fruit
	   
	   //send new fruit
	   setTimeout(startAction, 500);
   });

//slice fruit
   //play sound 
   //ecplode fruit

//functions
function addHearts(){
	  $("#trialsLeft").empty();
     for(i=0; i< trialsLeft;i++){
                  $("#trialsLeft").append('<img src="images/heart.png" class="life">');
              }
}

//start sending fruites
 
function startAction(){
    //generate a  fruit
    $("#fruit1").show();
    chooseFruit();//choose a random fruit
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -50});
    //random position
    
      //generate a random step
      step = 1+ Math.round(5*Math.random()); //change step
    
     //Move fruit down by one step every 10ms
      action = setInterval(function(){ 
      $("#fruit1").css('top',$("#fruit1").position().top + step);
          //fruits original value + step
          
          //check if the fruit is too low
          if($("#fruit1").position().top > $("#fruitsContainer").height()){
              //check if we have trials left
              if(trialsLeft > 1){
                  //generate a  fruit
                $("#fruit1").show();
               chooseFruit();//choose a random fruit
               $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -50});
                //random position
    
              //generate a random step
               step = 1+ Math.round(5*Math.random());//change step
                  
                //reduce trials by one
                  trialsLeft --;
                  
                  //populate trialsLeft box
                  addHearts();
                  
              }else{ // game over
                  playing = false; //we are not playing anymore
                  $("#startreset").html("Start Game");//change button to start game
                  $("#gameOver").show();
                  $("#gameOver").html("<p>Game Over!</p><p>Your score is "+ score +"</p>");
				  $("#trialsLeft").hide();
                  stopAction();
              }
          }
      }, 10);
}

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src','images/'+ fruits[Math.round(8*Math.random())] + '.png');
}

//Stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});

//are we playing?
     //yes
         //reload page
     //no
         //show trials left
         //chang button text to "restart game"
         //1.create a random fruit
        //define a random step
         //2.move fruit down one step every 30sec
            //is fruit to low?
                //no-> repeat nb2
                //yes->any trials left?
                      //yes:repeat nb1
                      //no:show game over ,button text:start game

//slice fruit
   //play sound 
   //ecplode fruit
