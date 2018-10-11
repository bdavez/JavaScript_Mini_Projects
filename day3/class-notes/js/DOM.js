// Dom Access: By ID

//Fetchs by id and assigns variable
var imgKitten = document.getElementById('kittenPic');
var header = document.getElementById('header');

console.log(header);

//Fetchs by tag and assigns variable
var listItems = document.getElementsByTagName('li');
console.log(listItems);

var listItemz = document.getElementsByClassName('nav-item');
console.log(listItemz);

listItems = document.querySelectorAll('li');
console.log(listItems);

var firstItem = document.querySelector('li');
console.log(firstItem);

console.log(listItems[0].classList);

// Get the Right Element

var p = document.getElementsByTagName('p');
console.log (p[1]);

// DOM NODES: Changing ATTRIBUTES
imgKitten.src = 'http://placekitten.com/g/600/500';

imgKitten.setAttribute('src', 'http://placekitten.com/g/500/400');

// DOM NODES: Styles 
var footer = document.getElementsByClassName('footer')[0]

footer.style.backgroundColor = 'purple';
footer.style.color = 'green';

p[0].style.color = "purple";

listItems[0].style.color = "blue";
listItems[1].style.color = "green";
listItems[2].style.color = "red";

var a = document.getElementsByTagName('a');
a[0].style.textDecoration = 'none';

// DOM INNERHTML 
footer.innerHTML += '...just adding this at the end of the page.';

// Creating NEW NODES

var pageBody = document.getElementsByTagName('body')[0];
// create our image tag with attributes
var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/g/500/200';
newImg.style.border = '1px solid black';
// add our image to the body
pageBody.appendChild(newImg);

// Moves footer
footer.style.bottom = "0";
footer.style.position = "absolute";
footer.style.width = "500px";

// get id name 
var main = document.getElementById('header');
// New element
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('KITTY!');
newParagraph.appendChild(paragraphText);
//add to main 
main.appendChild(newParagraph);