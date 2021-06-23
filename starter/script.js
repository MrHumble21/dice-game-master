let scores = [0, 0];
let activePlayer = 0;
let roundscores = 0;
let gameplaying;
dice = Math.floor(Math.random() * 6) + 1;
DOMdice = Math.floor(Math.random() * 6) + 1;


/* --------------------------------------------------------------------------------------------------------------------------------- */

document.querySelector("#current--" + activePlayer).innerHTML = DOMdice;
document.querySelector(".dice").style.display = "none";

/* --------------------------------------------------------------------------------------------------------------------------------- */


/* equalled to the zero  */

document.getElementById("score--0").innerHTML = "0";
document.getElementById("score--1").innerHTML = "0";
document.getElementById("current--0").innerHTML = "0";
document.getElementById("current--1").innerHTML = "0";


/* ------------------------------------------------------functions--------------------------------------------------------------------------- */

function nextPlayer() {
    //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; is another way of using if else statements :-means else:)

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscores = 0;


    //change the ui of active player by replacing active class in css by using toogle method in JS.

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector(".dice").style.display = 'block';


    // check whether plare one is winner or second player
}

/* ----------------------------------------------------------functions----------------------------------------------------------------------- */
document.querySelector(".btn--roll").addEventListener("click", function btn() {
    //1. get a random number 


    dice = Math.floor(Math.random() * 6) + 1;


    //display a result


    document.querySelector(".dice").style.display = 'block';

    document.querySelector(".dice").src = `dice-${dice}.png`;

    //identify score is equal to zero or not

    if (dice !== 1) {
        roundscores += dice;
        document.querySelector('#current--' + activePlayer).innerHTML = roundscores;
        
    }
    else {
        nextPlayer();
    }
});


/* --------------------------------------------------------------------------------------------------------------------------------- */

document.querySelector(".btn--hold").addEventListener('click', function () {
    

    // add the current scores to global scores
    scores[activePlayer] += roundscores;
    // update ui 
    document.querySelector('#score--' + activePlayer).innerHTML = scores[activePlayer];

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name--' + activePlayer).textContent = "winner";
        document.querySelector('.dice').style.display = "none";
        gameplaying = false;
        document.querySelector('.btn--hold').style.display ="none";
        document.querySelector('.btn--roll').style.display ="none";
    } else { nextPlayer(); }




})

/* -------+-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

document.querySelector(".btn--new").addEventListener('click', function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundscores = 0;
    gameplaying = true;

    document.querySelector('.btn--new').addEventListener('clicl', function on(){})
    document.querySelector('.btn--hold').style.display ="block";
    document.querySelector('.btn--roll').style.display ="block";



    document.getElementById("score--0").innerHTML = "0";
    document.getElementById("score--1").innerHTML = "0";
    document.getElementById("current--0").innerHTML = "0";
    document.getElementById("current--1").innerHTML = "0";



})