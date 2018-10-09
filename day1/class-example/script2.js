var temperature = prompt ("What is the temperature?");
var toque = false;

if (temperature < -20 && toque) {
    alert('you have a hat, now wear a jacket, I would stay inside')
}
else if (temperature < -20) {
    alert('stay inside!');
}
else if (temperature <= 0 && toque) {
    alert ('wear a coat, nice hat!');
}
else if (temperature <= 0) {
    alert ('wear a coat and a hat');
}
else if (temperature <= 10) {
    alert("put on a jacket!");
}
else if (temperature > 10) {
    alert ("you should be G");
}