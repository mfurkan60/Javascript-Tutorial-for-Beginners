/*

Objects are very important programign in JS.
In JavaScript, almost "everything" is an object like 
Booleans, Strings, Dates, Functions ,Arrays , ..etc.



*/
let value;

const programmer = {
    name : "Alex ALex",
    age : 25,
    email: "abc@gmail.com",
    langs : ["Python","Java","Javascript"],

    address : {
        city : "CA",
        street : "Brodway 265"
    },

    work : function(){
        console.log("Alex is stil working");
    }


}

value = programmer;

value = programmer.email; // email
value = programmer["email"];


value = programmer.langs;


value = programmer.address.city;


programmer.work();



