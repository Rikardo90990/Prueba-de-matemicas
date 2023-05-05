player_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");


player1_score=0;
player2_score=0;
document.getElementById("player1_game").innerHTML=player_name+" : ";

document.getElementById("player2_game").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;

document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="turno para preguntar  chamoy"+"player1_name";


document.getElementById("player2_answer").innerHTML="turno para responder  chamoy"+"player2_name";

function send (){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log (word);






    charAt1=word.charAt(1);
    console.log (charAt1);


var length_divide2=Math.floor(word.length/2);
charAt2=word.charAt(length_divide2);
console.log (charAt2)


var longitudmenosuno=word.length-1;
charAt3=word.charAt(longitudmenosuno);
console.log (charAt3);


removecharAt1=word.replace(charAt1,"_");
removecharAt2=removecharAt1.replace(charAt2,"_");
removecharAt3=removecharAt2.replace(charAt3, "_");
console.log(removecharAt3);


question_word="<h4 id='word_display'>Q.>"+removecharAt3+"</h4>";
input_box = "<br> Respuesta: <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
var question_turn="player1";
var answer_turn="player2";
function check(){
get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
console.log(answer);
if(answer==word){
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTM=player1_score;
}
else{
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTM=player2_score;
}



}