//  Create square
var square = document.getElementById('shape');

square.style.background = 'blue';
square.style.height = '100px';
square.style.width = '100px';
square.style.position = 'absolute';
square.style.top = '100px';
square.style.left = '100px';

// Timers 
// setTimeout() - one-shot timer
// setInterval() - continually firing timer

function doThisLater() {
    alert("Time's up!");
    }
    
    var timerId = setTimeout(doThisLater, 3000);
    clearTimeout(timerId);

    // Clock 
    var time = document.getElementById('time');
    
    function displayDate() {
        var date = new Date();
        time.innerHTML = date
    }
    setInterval(displayDate, 1000);
  
//  Events 

function sayHi (event) {
    alert('Hi!');
    square.style.background = "red";
    };

    // Mouseover listener
var button = document.getElementById("myBtn");

// button.addEventListener("mouseover", function (event) {
// alert('Try to click the button');
// });

// Preventing Defaults 
var link = document.getElementById("myLink");

link.addEventListener("click", function(event) {
event.preventDefault();
alert('error, no can do bud')
});

// Current Target 
myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function(event) {
    btn = event.currentTarget;
    btn.style.backgroundColor = 'red';
    btn.innerHTML = 'Clicked!';
    });