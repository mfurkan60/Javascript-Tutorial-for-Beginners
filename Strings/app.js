let value;

const firstName = "AlexAlex";
const lastName = "Luly";

const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName; //string concatenation


value = firstName.length; // length of string


value = firstName.toLowerCase();  // to lowercase

value = firstName.toUpperCase();  // to uppercase


value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1];


// Index Of

value = firstName.indexOf("L");
value = firstName.indexOf("e");
value = firstName.indexOf("l");


// Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length -1);

// Split


value = langs.split(",");

// Replace

value = langs.replace("Python","CSS");


// Includes 

value = langs.includes("Java");
value = langs.includes("asdsadsadsad");


console.log(value);
