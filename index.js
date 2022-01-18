
var randNo1 = Math.floor(Math.random()*6)+1;
var randImage1 = "images/dice"+randNo1+".png";

var die1 = document.querySelectorAll("img")[0];
die1.setAttribute("src", randImage1);



var randNo2 = Math.floor(Math.random()*6)+1 ;
var randImage2 = "images/dice"+randNo2+".png";

var die2 = document.querySelectorAll("img")[1];
die2.setAttribute("src", randImage2);



if(randNo1> randNo2){
  document.querySelector("h1").innerHTML = "Player 1 won!🚩";
}
else if(randNo1<randNo2) {
  document.querySelector("h1").innerHTML = "Player 2 won!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw! 🏳";
}
