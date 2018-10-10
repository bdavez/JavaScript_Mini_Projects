var celsius = prompt('What is the temperature is Celsius?');
var fahrenheit = prompt('What is the temperature is Fahrenheit?');

ctof = (((celsius * 9) / 5) + 32); 

ftoc = (((fahrenheit - 32) * 5) / 9); 

document.write("Celsius to Fahrenheit is " + ctof);
document.write("<br>" + "Fahrenheit to Celsius is " + ftoc);

