// 1 select random number generator-->
var randomNumber1 = Math.floor(Math.random() * 4) + 1; // 1 - 3
// 2 Concatenate to the SRC file-->
var randomNumberImage = "number" + randomNumber1 + ".jpg";
// 3 search the folder for selectd images -->
// var randomImageSource = "images/" + randomNumberImage only if these pictures in different folder

//- 4 search the entire document for HTML image tags -->
var image1 = document.querySelectorAll("img") [0]; 

//<!-- 5 set the assigned attribute SRC to the selected random image -->
image1.setAttribute("src", randomNumberImage);


var randomNumber2 = Math.floor(Math.random() * 4) + 1;

var randomNumberImage2 = "number" + randomNumber2 + ".jpg";  // concatenate number to ".jpg"


var image2 = document.querySelectorAll("img") [1];


image2.setAttribute("src", randomNumberImage2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "player1 wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "player2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
