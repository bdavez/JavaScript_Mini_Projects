// Two methods for adding items to local storage (Set Data)
localStorage.setItem("username", "Billy");
localStorage.firstname = "Billy";

// Get Data 

localStorage.getItem("username"); //Billy 
// var name = localStorage.username;

console.log(localStorage.username);

// Remove Data 
localStorage.removeItem("username");
localStorage.username = null;
localStorage.clear();

console.log(localStorage.username);


