var p = $('#main p');
p.css({'float' : 'left', 'background-color': 'purple'});

var a = $('#main a');
a.attr('href', 'http://www.yahoo.com')
$('a').css({'color': 'green'})

// Get the links and assign them to variable links
var links = $('a');
// Use the jQuery each method to loop through each link.
links.each(function() {
// Take each link and assign it to the variable link
var link = $(this);
// Set the link text to the link text + '!'
link.text(link.text() + '!');
link.css({'text-decoration': 'none'})
});

// Document ready will run the script when the browser is ready
$(document).ready(function() {
    // Do everything
    });

// Creates new variable / button
var newButton = $('<br><button>Check Console</button>');
$('#main').append(newButton);

// Button click function
$('button').on('click', function(event) {
    console.log('you clicked it')
});
// Keypress function 
$('body').on('keypress', function(event) {
    console.log('you typed a key');
});
// Form Example
$('form').on('submit', function(event) {
    event.preventDefault();
    console.log('Not submitting the form! There is nothing there!!!');
    // Maybe I want to do stuff first.
    });

// Animations
// $('#error').toggle(5000);

$('#error').hide();
$('#error').fadeIn(1000);

$('#error').show(1000, function() {
    $(this).addClass('alert');
});

