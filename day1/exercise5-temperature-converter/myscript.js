var celsius = prompt('What is the temperature is Celsius?');
var fahrenheit = prompt('What is the temperature is Fahrenheit?');

ctof = (celsius - 32) * 5 / 9; 

ftoc = (fahrenheit * 9) / 5 + 32; 


document.write("Fahrenheit to Celsius is " + ftoc);
document.write("<br>" + "Celsius to Fahrenheit is " + ctof);
