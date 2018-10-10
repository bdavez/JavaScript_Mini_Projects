var children = 0;
var partner = "";
var place = "";
var job = "";

function tellFortune(children, partner, place, job) {
    return "You will be a " + job +" in " + place + " and married to " + partner + " with " +  children + " kids.";
}

function explainFortune() {
    
    if (partner === "") {
        alert(tellFortune(4, 'Cameron', 'Vancouver', 'Engineer'));
    }
    else if (partner === "Cameron") {
        alert(tellFortune(3, 'Avery', 'Calgary', 'Web Developer'));
    }
    else if (partner === "Avery") {
        alert(tellFortune(3, 'Marley', 'Toronto', 'Car Salesman'));
    }
}
