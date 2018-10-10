var children = 0;
var partner = "";
var place = "";
var job = "";

function tellFortune(children, partner, place, job) {
    return "You will be a " + job +" in " + place + " and married to " + partner + " with " +  children + " kids.";
}

function explainFortune() {
    var random = Math.floor(Math.random() * 3);
    console.log(random);
    if (random === 1) {
        alert(tellFortune(4, 'Cameron', 'Vancouver', 'Engineer'));
    }
    else if (random === 0) {
        alert(tellFortune(3, 'Avery', 'Calgary', 'Web Developer'));
    }
    else if (random === 2) {
        alert(tellFortune(2, 'Marley', 'Toronto', 'Car Salesman'));
    } 
}