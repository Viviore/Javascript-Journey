//1. EASY WAY = window prompt

let firstName;

firstName = window.prompt("What is your first name?");

console.log(`Firstname: ${firstName}`); 

//2. PROFESSIONAL WAY = HTML textbox

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("userName").value;
    document.getElementById("greetings").textContent = `Welcome Back ${username}`;
    console.log(`Username: ${username}`);
};