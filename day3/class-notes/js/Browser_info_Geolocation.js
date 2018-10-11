// Browser Objects 

// Activity Browser info
console.log(navigator.userAgent);
console.log(navigator.vendor);
console.log(navigator.platform);

// Geolocation
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    document.write('Your latitude is: ' + latitude + " <br> Your longitude is " + longitude  );
    }

    function geoError(errorObj) {
        alert("Uh oh, something went wrong");
        }

        if (typeof navigator.geolocation != "undefined") { //FEATURE DETECTION
            navigator.geolocation.getCurrentPosition(success, geoError);
            }
         else {
             alert('You should maybe get a better browser')
         }   

// Document Object, can be used for mobile screen detection. 
console.log(screen.height); // height of the screen in pixels
console.log(screen.width);  // width of the screen in pixels
console.log(screen.colorDepth);  // number of bits used for colors on client's screen
console.log(screen.orientation);  // orientation of the screen (landscape, portrait)

// Documnet Object
document.bgColor = "red"; // get and set the background color of the page
