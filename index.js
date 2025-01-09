"use strict";
let x = 21; // type inferencing 
console.log(x);
function greetname(name) {
    console.log("heyy duniya what you should do ??" + name);
}
greetname("bygourav");
function greet(user) {
    console.log("Toh kaisa ho aap log " + user.name); // Access `name` using `user.name`
}
let user = {
    name: "Gourav Singh",
    age: 21
};
greet(user);
