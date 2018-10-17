
$(document).ready(function() {
    });

$('#reset').on('click', function(event) {
    location.reload();
});

$('form').on('submit', function(event) {
    event.preventDefault();
    var cNumbers = parseInt($('#cNumber').val());
    console.log(cNumbers);

    for (var i = 0; i < cNumbers; i++) {
    var newColor = $('<div></div>');
    newColor.add(newColor)
    newColor.css({'border-radius': '50%','background':randomColor(), 'height': '100px', 'width': '100px'})
    $('#mainContent').append(newColor);
}
    });