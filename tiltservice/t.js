let tsArr=[];

function myFunction(e) {	
			
    e.preventDefault(); 

    let isValid=true;

  const firstname=document.getElementById("myForm").elements.namedItem("firstName").value;
 
  if(firstname==""){
    alert("Invalid Format:Name cannot be left blank");
    isValid=false;	
}
let nameCharArray = firstname.split();
for(a in nameCharArray)
    if(typeof a== "number" || typeof a=="symbol"){
     alert("Invalid Format:First name must be bigger than 3 characters");
    isValid=false;
    break;
} 


const lastname=document.getElementById("myForm").elements.namedItem("lastName").value;

if(lastname==""){
    alert("Invalid Format:Last name cannot be left blank");
    isValid=false;
}


let lastnameCharArray = lastname.split();
for(a in lastnameCharArray)
    if(typeof a== "number" || typeof a=="symbol"){
    alert("Invalid Format:Last name must be bigger than 3 characters");
    isValid=false;
    break;
} 
 


  
  
  const date=document.getElementById("myForm").elements.namedItem("date").value
  const type=document.getElementById("myForm").elements.namedItem("type").value

  if(isValid===false)
    return;
  
    //alert("Hello "+firstname+" "+lastname+" !"+" Shipment of type " + type +" at date " + date + " has been confirmed! ");


    ts = {
        name1:firstname,
        surname1:lastname,
        date1:date,
        type1:type
       }
    
       console.log(ts.name1+" "+ts.surname1+" "+ts.date1+""+ts.type1);

    tsArr.push(ts);
    localStorage.setItem("tservice",JSON.stringify(tsArr));

}

function contact2(){

    var name2=document.getElementById("name2").value;
var email2=document.getElementById("email2").value;

if(name2==" " || email2== " "){
alert("Filled it out");
return false;
} 

}