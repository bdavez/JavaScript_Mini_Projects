var Question1 = document.getElementById('Question1');
var Question2 = document.getElementById('Question2');
var Question3 = document.getElementById('Question3');
var Question4 = document.getElementById('Question4');
var Question5 = document.getElementById('Question5');
var submitButton = document.getElementById('submit');
var submitButton2 = document.getElementById('submit2');
var submitButton3 = document.getElementById('submit3');
var submitButton4 = document.getElementById('submit4');
var submitButton5 = document.getElementById('submit5');
var scoreCounter = document.getElementById('scoreCounter');
var score = 0;
var done = document.getElementById('Done');
var reset = document.getElementById('reset');

submitButton.addEventListener('click', function(event) {
    var question1 = document.myform.question1.value;

    if (/[iI]reland/.test(question1)) {
        score = score + 20;
        Question2.style.display = "block";
        Question1.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
    else {
        Question2.style.display = "block";
        Question1.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
});

submitButton2.addEventListener('click', function(event) {
    var question2 = document.myform.question2.value;

    if (/[rR]ed/.test(question2)) {
        score = score + 20;
        Question3.style.display = "block";
        Question2.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
    else {
        Question3.style.display = "block";
        Question2.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
});

submitButton3.addEventListener('click', function(event) {
    var question3 = document.myform.question3.value;
    
    if (/[hH]edwig/.test(question3)) {
        score = score + 20;
        Question4.style.display = "block";
        Question3.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
    else {
        Question4.style.display = "block";
        Question3.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
});

submitButton4.addEventListener('click', function(event) {
    var question4 = document.getElementById('question4');
    
    if (question4.checked) {
        score = score + 20;
        Question5.style.display = "block";
        Question4.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
    else {
        Question5.style.display = "block";
        Question4.style.display = "none";
        scoreCounter.innerHTML = "Score = " + score;
    }
});

submitButton5.addEventListener('click', function(event) {
    var question5 = document.getElementById('question5').value;
    
    if (question5 == "a") {
        score = score + 20;
        done.style.display = "block";
        scoreCounter.innerHTML = "Score = " + score;
        submitButton5.style.display = "none";
        reset.style.display = "block";
    }
    else {
        done.style.display = "block";
        scoreCounter.innerHTML = "Score = " + score;
        submitButton5.style.display = "none";
        reset.style.display = "block";
    }
});

reset.addEventListener('click', function(event) {
    location.reload();
});

