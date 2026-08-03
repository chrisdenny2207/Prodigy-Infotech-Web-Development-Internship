const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(){

links.forEach(item => item.classList.remove("active"));

this.classList.add("active");

});

});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});