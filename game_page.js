//Declaring variables
var player_1 = localStorage.getItem("Player_1math");
var player_2 = localStorage.getItem("Player_2math")

var score1 = 0;
var score2 = 0;

//Giving text in html 
document.getElementById("plr1_name").innerHTML = player_1 + ":";
document.getElementById("plr2_name").innerHTML = player_2 + ":";

document.getElementById("plr1_score").innerHTML = score1;
document.getElementById("plr2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question turn : " + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2;

//Function send(complicated)
function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;

    //The question and space for answer
    Question_Word = number1 + ' X ' + number2;
    Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
    Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
    row = Question_Word + Input_Box + Check_Button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("wordSend").value = "";
}