// heck the results of your assignGrade function 
// from the if/else activity by logging every valuefrom 60 to 100: your
//  log should show "For 88, you got a B. For 89, you got a B. For 90, you got 
//  an A.For 91, you got an A.", etc., logging each grade point in the range.

function assignGrade () {
    var grade = 100;

    for (var q = 60; q <= grade; q++) {
        
        if (q < 70) {
            console.log(q + "You get a D");
        }

        else if (q < 80) {
            console.log(q + "You get a C");
        }
    
        else if (q < 90) {
            console.log(q + "You get a B");
        }
    
        else if (q <= 100) {
            console.log(q + "You get a A");
        }
    }
}

assignGrade();