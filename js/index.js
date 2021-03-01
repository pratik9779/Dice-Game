function play(){
    var randomNumber1 = Math.floor(Math.random()*6);
    var randomNumber2 = Math.floor(Math.random()*6);

    var imagesar=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

    document.querySelector(".img1").setAttribute("src", imagesar[randomNumber1]);
    document.querySelector(".img2").setAttribute("src", imagesar[randomNumber2]);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Winner - Player 1."
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Winner - Player 2."
    }
    else{
        document.querySelector("h1").innerHTML="Draw!"
    }
}
