/*  

######  I have explaned and compare Json to XML. If you want to read this post please clikck this link:
    http://www.mertfurkanerguden.com/blogs
 
 
Json is a format transporting datas.
 Json is usually used when datas are sent from server to web site.

JSON = JavaScript Object Notation
JSON is a lightweight data interchange format

JSON VALUES:

We can presedent a lot of value of datas using by JSON .

-STRING
-INTEGER
-BOOLEAN
-ARRAY
-OBJECT
-NULL


*/
 var employees = {
"employees":[
  {"firstName":"anna", "lastName":"lec"},
  {"firstName":"amt", "lastName":"Smith"},
  {"firstName":"joseph", "lastName":"CJ"}
]
};
 
console.log(employees); //accses to employees object

var boss = ('{ "name":"Alex","age":30,"city":"New York","salary": "$2000" }'); 
            
            

var obj = JSON.parse(boss);
document.getElementById("theboss").innerHTML = obj.name + " /" + obj.age;
