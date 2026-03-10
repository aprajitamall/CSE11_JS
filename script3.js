// var count;
// document.write("Starting loop"+"<br/>");
// for(count=0; count<10;count++)
// {
//     document.write("current count:" +count);
//     document.write("<br/>");
// }
const person={
    fname:"Aprajita",
    lname:"Mall",
    age:19
}
for(let x in person) {
    document.write("personal details:"+x+" "+person[x]+"<br/>")
}
// while loop
var count=0;
document.write("Starting loop"+"<br/>");
while(count<10)
{
    document.write("Current Count:"+count+"<br/>");
    count++;
}
document.write("Loop Stopped<br/>");
// Conditional statement
// if Statement
var age=20;
if(age>18) {
   document.write("You are eligible to cast the vote<br/>");
}
// if else statement
let age1=20;
if(age>=18) {
    document.write("You are an adult<br/>");
}
else {
    document.write("You are a minor<br/>");
}
var grade='A';
document.write("Entering Switch Block<br/>");
switch(grade) {
    case 'A':document.write("Good job<br/>");
    break;
    case 'B':document.write("Pretty Good<br/>");
    break;
    case 'C':document.write("Passed<br/>");
    break;
    case D:document.write("Not so Good<br/>");
    break;
    case 'E':document.write("Failed<br/>");
    break;
    default: document.write("Unknown Grade<br/>");
}
document.write("Exiting Switch Block<br/>");
// Functions
// with parameters
function myFunction() {
    alert("Hello World");
}
//without parameters
function sayHello(name,age) 
{
    document.write(name+"is"+age+"years old.");
}
//return function
var res=multiply(12,30);
function multiply(x,y)
{
    return x*y;
}
document.write(res);
//normal function
function add(a,b)
{
    document.write(a+b);

}
add(10,20);
//arrow function
var add2=(a,b)=>{
    document.write(a+b);
};
add2(102,20);

