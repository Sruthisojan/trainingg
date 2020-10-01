var questions = [{
    question: "Who is Harry's Godfather?",
    choices:["James","Sirius","Remus","Peter"],
    correctAnswer:1
}, {
    question: "What is Harry's Aunt's name?",
    choices:["Lilly","Katniss","Petunia","Primrose"],
    correctAnswer:2
}, {
    question: "Name of Voldemort's snake?",
    choices:["Nagin","Nagini","Nargini","Nargles"],
    correctAnswer:1
}, {
    question: "What house does Cedric Diggory belong to?",
    choices:["Griffindor","Slytherin","Ravenclaw","Hufflepuff"],
    correctAnswer:3
}, {
    question: "What is Ron's father's name?",
    choices:["Regulas","Arthur","Percy","Charlie"],
    correctAnswer:1
}, {
    question: "What is Ginny's pet's name?",
    choices:["Jigglypuff","Pygmypuff","Hufflepuff","Pixie"],
    correctAnswer:1
}, {
    question: "What was Harry's pet?",
    choices:["Cat","Owl","Rat","Pigeon"],
    correctAnswer:1
}, {
    question: "Harry's Patronus?",
    choices:["Stag","Dove","Rabbit","Dog"],
    correctAnswer:0
}, {
    question: "Which creatures guard Azkaban?",
    choices:["Thestrals","Dementors","Hippogriff","Sphinx"],
    correctAnswer:1
}, {
    question: "Who killed Albus Dumbledore?",
    choices:["Draco","Severus","Bellatrix","Lucius"],
    correctAnswer:1
}];
var currentQuestion =0;
var correctAnswers =0;
var quizOver =false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function(){
        if(!quizOver){
            value=$("input[type='radio']:checked").val();
            if(value==undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quizMessage").hide();
                if(value==questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < question.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver=true;
                }
            }
        }else{
            quizOver=false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass =$(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    $(questionClass).text(question);
    $(choiceList).find("li").remove();
    var choice;
    for(i=0;i<numChoices;i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value =' + i + 'name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
function resetQuiz(){
    currentQuestion=0;
    correctAnswers=0;
    hideScore();
}
function displayScore(){
    $(document).find(".quizContainer > .result").text("You scored: "+correctAnswers+" out of: "+questions.length);
    $(document).find(".quizContainer > .result").show();
}
function hideScore(){
    $(document).find(".result").hide();
}