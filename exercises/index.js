var turn=0;
function Reset()
{  turn=0;//reset turn
   document.getElementById("win").style.display="none";/*Hide the winner message for now*/

   var player1 = document.getElementById("player1");
   var player2 = document.getElementById("player2");
   var dice= document.getElementById("dice");
   //Set initial positions
   player1.style.top="400px";
   player1.style.left="100px";
   player2.style.top="298px";
   player2.style.left="40px"
    };

function Throw()
{var dots=document.getElementsByTagName("div");//get all div elements
//display animated gif and not the static dice
 document.getElementById("rollingDice").style.display="inherit";
document.getElementById("dice").style.display="none";
dots[1].style.display="none";
dots[2].style.display="none";
dots[3].style.display="none";
dots[4].style.display="none";
dots[5].style.display="none";
dots[6].style.display="none";
dots[7].style.display="none";  
var number = Math.floor(Math.random() * (7 - 1) + 1); /*funcion to get a random number between a min(incluided) and max(excluided) found in this page: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random */ 
 setTimeout(function($number){  document.getElementById("rollingDice").style.display="none"; document.getElementById("dice").style.display="inherit";  
   switch(number)
 //show de value on the dice, this would be much easier if I had pictures for every face
   { case 1:
     dots[7].style.display="inherit";
     break;
     case 2:
     dots[1].style.display="inherit";
     dots[6].style.display="inherit";
     break;
     case 3:
     dots[1].style.display="inherit";
     dots[6].style.display="inherit";
     dots[7].style.display="inherit";
     break;
     case 4:
     dots[1].style.display="inherit";
     dots[3].style.display="inherit";
     dots[4].style.display="inherit";
     dots[6].style.display="inherit";
     break;
     case 5:
     dots[1].style.display="inherit";
     dots[3].style.display="inherit";
     dots[4].style.display="inherit";
     dots[6].style.display="inherit";
     dots[7].style.display="inherit";
     break;
     case 6:
     dots[1].style.display="inherit";
     dots[2].style.display="inherit";
     dots[3].style.display="inherit";
     dots[4].style.display="inherit";
     dots[5].style.display="inherit";
     dots[6].style.display="inherit";
     break;} },800);
     //move switching turns
     var player;
     if(turn%2 == 0)
     {player= player1;}
     else
     {player = player2;}
     //New feature, cuestions each turn, if missed loose turn
var questions = [
" The ---- object allows you to perform mathematical tasks, and includes several properties. ",
" The ----- expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. ", " An ----- uses numbers to access its elements, and an object uses names to access its members. ", "The --------- property sets or returns the HTML content of an element.","------------- can be used to build strings by joining together multiple strings, or by joining strings with other types"," you can write code that executes when an ----- occurs, such as when a user clicks an HTML element ",
"------- are functions that are stored as object properties.","The ----- loop repeats through a block of code, as long as a specified condition is true.","----- --- is used when you want to ensure that information gets through to the user.","------ --- is often used to have the user input a value before entering a page."];
var answers = ["math","switch","array","innerhtml" ,"concatenation","event","methods","while","alert box","prompt box" ];
//how to get random element from an array found here(and explained): https://www.google.com.uy/amp/s/zenscript.wordpress.com/2013/11/23/how-to-pick-a-random-entry-out-of-an-array-javascript/amp/
var n = Math.floor(Math.random() * 10);
var ans= prompt(questions[n]).toLowerCase();
if(ans==answers[n])
{     //move the corresponding player
    alert("Correct!:D ");
     var t= setInterval(Move,10);
     var bMove= 0;
     var bPosX= player.offsetLeft;
     var bPosY= player.offsetTop;
     var limit=26*number;
     turn++;}
     else
     {alert("Incorrect, you loose your turn :( ");
     turn++;
     }
function Move()
{ 
   if(bMove <= limit)
   {//move depending on the place
    if(bPosX < 227 && bPosY==298 || bPosY == 271 && bPosX < 274 )  { 
    //fist special
   if(bPosX>=217&&bPosY==298&&bMove==limit)
    {alert("Throw the dice again");
    turn--;}//cancels with turn++ so the same player moves again
    bPosX++;
    player.style.left = bPosX + "px";}
    else if(bPosX == 227 && bPosY > 271|| bPosX ==274 &&bPosY > 215 || bPosX== 93 && bPosY >215)
    {
    bPosY--;     
    player.style.top=bPosY +"px";}
    else if(bPosY == 215 && bPosX >168 || bPosY == 243 && bPosX >93)
    {//second special
    if(bPosY==243 && bPosX<=110&&bMove==limit)
    {alert("Move forward three spaces");
    limit +=82;}//extends the limit so it keeps moving for 3 spaces
    bPosX--;
    player.style.left = bPosX + "px"; }
    else if(bPosX ==168 && (bPosY < 243&&bPosY >160)|| bPosX==116 && bPosY<160)
    {//third special has two spaces, so we have this vertical part and another part for the first space
    if(bPosX ==116&&bMove==limit)
    {alert("Go back to Start");
   player.style.left="40px";
   player.style.top="298px";
    clearInterval(t);
    return;}//reset player's position 
     bPosY++;
     player.style.top=bPosY +"px";}
    else if(bPosY==215 && (bPosX>40&&bPosX <=93))
    {
    bPosX--;
    player.style.left = bPosX + "px";}
    else if(bPosX ==40 &&bPosY >132||bPosX ==250&&bPosY>125)
    {bPosY--;
    player.style.top=bPosY +"px";
    if(bPosX ==250&&bPosY ==125)
    {Won();}}/*function for displaying the winner text and restarting*/
    //Made by Elizabeth Espíndola, please don't copy
    else if(bPosY==132 && bPosX<120 || bPosY ==160&&bPosX<254)
    { //third special horizontal movement part
    if(bPosX >=110&&bPosY==132&&bMove==limit)
    {alert("Go back to Start");
   player.style.left="40px";
   player.style.top="298px";
    clearInterval(t);
    return;}//reset player's position 
    bPosX++;
    player.style.left = bPosX + "px"; }
    bMove++;}
   else
   {clearInterval(t);}
   }
 function Won()//End of the game
{
if(player ==player1)//Who won?
{ document.getElementById("win").src="  http://bh.springload.co.nz/images/msg-player1-wins.png ";
}
else{ document.getElementById("win").src="  http://bh.springload.co.nz/images/msg-player2-wins.png ";
}
/*this will decide the corresponding image src(I luckily found the same picture for both players)*/ document.getElementById("win").style.display="inherit";
//when it displays the css animation starts, at the end we restart the gamr after 3.5 seconds
var again=setTimeout(function(){
   alert("Thank you for playing, if you liked it please thumbs up (^-^)/");
   Reset();
},3000);
 } }; 
