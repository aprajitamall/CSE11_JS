   function calculateResult(){
    const n=document.getElementById("students").value;
    let total=0;
    let i;
    for(i=0;i<n;i++){
     let x=parseFloat(prompt("Enter the height of students in cm "+(i+1)));
    total=total+x;
    }
    let average=total/n;
    let grade;
    if(average>180){
        grade="Best";
    }
    else if(average>=170){
        grade="Better";
    }
    
    else{
        grade="not accepted";
    }
    let res;
    if(average>170){ 
         res=" class eligible to participate";
     }
    else{ 
         res=" class not eligible";
      }
    let result = document.getElementById("result").innerHTML="total height:"+total+"<br/>"+"average height:"+average+"<br/>"+"grade:"+grade+"<br/>"+"result:"+res;
}