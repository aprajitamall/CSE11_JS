var text='{"employees":['+
'{"firstName:":"Aprajita","lastName:":"Mall"},'+
'{"firstName:":"Aryan","lastName:":"Shina"},'+
'{"firstName:":"JOhn","lastName:":"Doe"}]}';
obj=JSON.parse(text);
document.getElementById("demo").style.backgroundColor="pink";
document.getElementById("demo").innerHTML=obj.employees[1].firstName+" "+obj.employees[1].lastName;