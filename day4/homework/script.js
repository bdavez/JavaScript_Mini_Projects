var quotes = [
 '"There is nothing permanent except change." - Heraclitus ',
 '"Learning never exhausts the mind." - Leonardo da Vinci', 
 '"If you cannot do great things, do small things in a great way." - Napoleon Hill', 
 '"A leader is one who knows the way, goes the way, and shows the way." - John C. Maxwell',
  '"The secret of getting ahead is getting started." - Mark Twain'
];
var main = document.getElementById('main');

var i = 0;
var quote = 0;

 function loop() {
  if (i < quotes.length) {
    quote = quotes[i];
    main.innerHTML = quote;
    i++;
    console.log(i);
}
else {
    i = 0;
    quote = quotes[i];
    main.innerHTML = quote;
    i++;
    }
}
loop();
setInterval(loop, 30600);



function back() {
    if (i < 1) {
        i = quotes.length;
        i--;
        quote = quotes[i];
        main.innerHTML = quote;
    }
    else {
        i--;
        quote = quotes[i];
        main.innerHTML = quote;
        console.log(i);
    }
}

// Fade in / Fade out
// function fadein () {
//     main.style.transform = 'translate(0px,0px)';
//     main.style.opacity = '1';
// }

// function fadeout () {
//     main.style.transform = 'translate(100px,0px)';
//     main.style.opacity = '0';
// }
// fadein();
// setInterval(fadein, 30600);
// setInterval(fadeout, 30000);
