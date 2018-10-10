console.log('----------------------------------------------');
console.log('Objects');
console.log('----------------------------------------------');

var recipe = {
    recipeTitle: 'Marshmello Pie',
    recipeDescription: 'Pie with chocolate and mashmellos',
    ingredients: ['marshmellos', 'chocolate', 'pie crust'],
    directions: ['1) put marshmello in pie crust', '2) add chocolate', '3) bake in oven'],
    rating: '4',
    cookTime: '35min',
    letsCook: function(food) {
       console.log ("im hungry! Lets cook... " + food )
    }
};

recipe.letsCook('Marshmello Pie');


var recipeRating = recipe['rating'];
// var recipeRating = recipe.rating;
console.log(recipeRating);

recipe.servings = 6;
recipe.rating = '5';
delete recipe.cookTime;


function recipeLog(user) {
    console.log("Recipe Title :" + user.recipeTitle + ", Servings :" + user.servings);
}
recipeLog(recipe);

console.log(recipe);

// Arrays of Objects

var movies = [
    {name:'Black Panther', rating: 3 }, 
    {name:'Snowpiercer', rating: 4 }, 
    
];

for (var q = 0; q < movies.length; q++) {
    var movie = movies[q];
    console.log("I give " + movie.name +" "+ movie.rating + " stars.")
}

