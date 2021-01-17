var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

p1 = document.querySelector(".img1");
p2 = document.querySelector(".img2");
result = document.querySelector(".container h1");


p1.setAttribute("src", "images/dice"+ randomNumber1+ ".png");
p2.setAttribute("src", "images/dice"+ randomNumber2+ ".png");

if(randomNumber1==randomNumber2)
{
	result.innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2)
{
	result.innerHTML = "🚩Player 1 Wins";
}
else
{
	result.innerHTML = "Player 2 wins🚩";
}
