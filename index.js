var but = document.getElementById("button");
but.addEventListener("click", per);
function per() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDice = "dice" + randomNumber1 + ".png";
    var at1 = "images/" + randomDice;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDice2 = "dice" + randomNumber2 + ".png";
    var at2 = "images/" + randomDice2;

    var image = document.querySelectorAll("img")[0];
    image.setAttribute("src", at1);

    image = document.querySelectorAll("img")[1];
    image.setAttribute("src", at2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins"
    }
    else {
        document.querySelector("h1").innerHTML = "Match Drawed";
    }
}





