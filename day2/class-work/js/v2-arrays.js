console.log('----------------------------------------------');
console.log('Arrays');
console.log('----------------------------------------------');

var favFood = ['pizza' , 'cheeseburger' , 'pasta' , 'wings' , 'sushi'];
console.log(favFood);
console.log(favFood.length);
console.log(favFood[3]);

favFood[3] = "Asparagus";
console.log(favFood);

favFood.push ('wings');
console.log(favFood);

for (var z = 0; z < favFood.length; z++) {
    console.log(favFood[z]);
}

