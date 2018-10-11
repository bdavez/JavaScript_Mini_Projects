var pageBody = document.getElementsByTagName('body')[0];

if(Modernizr.geolocation)
    {
    document.getElementById("geoConfirm").innerHTML = "This will work on this browser!";
    var newImg = document.createElement('img');
    newImg.src = 'http://placekitten.com/g/400/400';
    newImg.style.border = '1px solid black';
    pageBody.appendChild(newImg);
    }
    else{
    document.getElementById("geoConfirm").innerHTML = "This will not work on this browser";
    var newImgz = document.createElement('img');
    newImgz.src = 'http://www.placepuppy.net/400/250';
    newImgz.style.border = '1px solid black';
    pageBody.appendChild(newImgz);
}

// Background color 
   if (history.length === 1) {
       pageBody.style.background += "lightblue";
   }
   else {
       pageBody.style.background += "orange";
   }

//  Header Customization 
var headerH1 = document.getElementById('headerH1');
headerH1.style.fontSize = "40px";
headerH1.style.textAlign = "center";
headerH1.style.color = "purple";
headerH1.style.fontFamily = "Tahoma"

var navItem = document.getElementsByClassName("nav-item");

navItem[0].style.background = "grey";
navItem[1].style.background = "green";
navItem[2].style.background = "yellow";
navItem[3].style.background = "red";