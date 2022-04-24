var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "abc" && password == "123"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}



// // Name and Password from the register-form
// var name = document.getElementById('name');
// var pw = document.getElementById('pw');

// // storing input from register-form
// function store() {
//     localStorage.setItem('name', name.value);
//     localStorage.setItem('pw', pw.value);
// }

// // check if stored data from register-form is equal to entered data in the   login-form
// function check() {

//     // stored data from the register-form
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');

//     // entered data from the login-form
//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');

//     // check if stored data from register-form is equal to data from login form
//     if(userName.value == storedName && userPw.value == storedPw) {
//         alert('You are loged in.');
//     }else {
//         alert('ERROR.');
//     }
// }