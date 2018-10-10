// #region while loop
var a9 = 1;
while (a9 <= 12) {
    console.log("9 x", a9,"=", a9 * 9);
    a9 = a9 + 1;
} 
// #endregion 

// // while times table 
// var number =1 
// while (number < 13) {
//     var counter = 1;
//     while (counter < 13) {
//         console.log(counter + "x" + number + " = " + counter*number);
//         counter++;
//     }
// }

// For loop
for (var i = 1; i <=12; i++) {
    console.log("9 x",i, "=", i * 9);
    if (i === 6) {
        console.log('I hate the number 6');
        break;
    }
}


// Loops and logic 
for (var y = 0; y <=20; y++) {
    if (y % 2 === 0) {
        console.log (y + ' is even');
    }
    else if (y % 1 === 0) {
        console.log (y +' is odd');
    }
    else {
        console.log(y);
    }
}