const element=document.getElementById("myh1");
let text=element.getAttribute("class");//to retrive the value of particular element 
document.getElementById("demo").innerHTML=text;
//
function myFunction()
{
    document.getElementById("myh1").setAttribute("class","democlass");
    alert("Attribute added successfully");
}