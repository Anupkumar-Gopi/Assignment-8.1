"use strict";

//set custom html5 api validation
window.onload = function () {
	// assign function onchange
	document.getElementById("pass").onchange = validatePassword; 
	document.getElementById("cpass").onchange = validatePassword;
}

function validatePassword(){
// pass field values
var pass2=document.getElementById("cpass").value;
var pass1=document.getElementById("pass").value;
// check for field value matching and return appropiate messages;
if(pass1!=pass2)
	document.getElementById("cpass").setCustomValidity("Passwords Don't Match");
else
	document.getElementById("cpass").setCustomValidity('');	 
//empty string means no validation error
}