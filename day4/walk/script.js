var walkForwards = true;

function monkeyWalk() {
  var img = document.getElementById('monkey');
  var currentTop = parseInt(img.style.top);

  if (walkForwards && (currentTop > (window.innerHeight-img.height))) {
    walkForwards = false;
  }

  if (!walkForwards && (currentTop <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.top = (currentTop + 10) + 'px';
  } else {
    img.style.top = (currentTop - 10) + 'px';
  }
  console.log(img.style.top);
}

setInterval(monkeyWalk, 50);