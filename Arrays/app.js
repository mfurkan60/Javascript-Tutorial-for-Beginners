let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Hi",22,null,undefined,3.14];

// Length of array
value = numbers.length;
// Indekslenme
value = numbers[1];
value = numbers[2];
value = numbers[numbers.length -1];


//The join() method joins array elements into a string.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join("*");
console.log(fruits);

numbers[2] = 1000;

value = numbers;

// Index Of

value = numbers.indexOf(1000);

// push to array

numbers.push(2000);


 // Add new items to the beginning of an array 
numbers.unshift(3000);

value = numbers;


// remove the last element of an array

numbers.pop()

value = numbers;
// remove the firs element
numbers.shift()

value = numbers;

// splice metod add  or remove the element
numbers.splice(0,3); // remove to 0,1,2 indexs element
numbers.splice(0,2,"55","45"); // add to 55 and 45 element in array 

value = numbers;
// Reverse the array

numbers.reverse();

value = numbers;
//sort of array but....
value = numbers.sort();


value = numbers.sort(function(x,y){ // ascending order
    return x - y;
});

value = numbers.sort(function(x,y){ // descending  order
    return y-x;
});

console.log(value);
