const result = document.getElementById("para");
result.innerHTML= "Hello world";
result.tittle = "my name";
//document.write(result);
const x=document.getElementsByClassName("p1");
 console.log(x);
 x[0].innerHTML="Arajita";
 x[1].innerHTML="Mall";
 x[2].innerHTML="18";
 const result3 =document.getElementsByTagName("p");//create array
result3[2].innerHTML= "this is a pet";
result3[1].style.color= "blue";
result3[1].innerText="my parragraph";
const test=document.querySelector("ul li:nth-child(3)");//read very first element
test.style.backgroundColor="green";
test.style.padding="10px";
// console.log(result3);
const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}