var number = 0;
while (number < 10) {
    var counter = 1;
    number++;
    while (counter <= 10) {
        document.write("<br>" + counter + "x" + number + " = " + counter*number);
        counter++;
    }
}