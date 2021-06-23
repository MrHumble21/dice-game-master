var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;

document.getElementById("score--0").innerHTML = "0";

document.getElementById("score--1").innerHTML = "0";

document.getElementById("current--0").innerHTML = "0";

document.getElementById("current--1").innerHTML = "0";

document.querySelector('.btn--roll').addEventListener('click', function btn(){

let dice = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dice").style.display = "none";

    let diceDom = document.querySelector('.dice');

    diceDom.style.display = 'block';

    diceDom.src = "dice-" + dice + ".png";

)
