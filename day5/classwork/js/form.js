var myForm = document.myform;

var firstName = document.myform.firstname.value;
// var lastName = document.myform['lastname'].type;
document.myform.lastname.focus();


// Create a list of checkboxes by using the checkbox name
var checkboxList = document.myform.feature;
// Loop through your checkbox list
for (var i = 0; i < checkboxList.length; i++) {
// If a checkbox is checked, console.log the value of the checkbox.
if (checkboxList[i].checked) {
console.log(checkboxList[i].value);
}
}

// Assign your submit button to a variable
var submitButton = document.myform.submit;
// Add a "click" event listener to your submitButton
submitButton.addEventListener("click", function(event) {

// Prevent the default action
event.preventDefault();

// Run the rest of your code
var name = document.myform["firstname"].value;
console.log('hello ' + name);
})



// function GetName() {
//     console.log(firstName);
// }

// setInterval(GetName, 1000);