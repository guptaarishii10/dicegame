var randomnumber=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber+".png";
var randomimagesource="images/"+randomdiceimage;

var image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomimagesource);

var randomnumber2=Math.floor(Math.random() *6)+1;
var randomimagesource2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnumber>randomnumber2)
document.querySelector("h1").innerHTML="Player 1 wins";

else if(randomnumber<randomnumber2)
document.querySelector("h1").innerHTML="Player 2 wins";

else 
document.querySelector("h1").innerHTML="Draw!";