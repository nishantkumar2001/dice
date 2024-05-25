var random=Math.floor(Math.random()*6)+1;
var n="./images/dice"+random+".png";
var rando=Math.floor(Math.random()*6)+1;
var s="./images/dice"+rando+".png";
document.querySelectorAll('img')[0].setAttribute("src",n);
document.querySelectorAll('img')[1].setAttribute("src",s);

if(n>s){
  document.querySelector("h1").innerHTML="player 1 wins!";
}else if(n<s){
  document.querySelector("h1").innerHTML="player 2 wins!";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}