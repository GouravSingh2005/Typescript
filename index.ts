let x:number =21;// type inferencing 
console.log(x);

function greetname(name:string ){
    console.log("heyy duniya what you should do ??"+name );
}
greetname("bygourav");




function greet(user: {
    name: string;
    age: number
}) {
    console.log("Toh kaisa ho aap log " + user.name); // Access `name` using `user.name`
}

let user = {
    name: "Gourav Singh",
    age: 21
};

greet(user);
