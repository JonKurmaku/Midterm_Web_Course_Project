//let contact={}; NL
let contactArr=[];

function buttonsub(e){

    e.preventDefault();

   let name=document.getElementById("name").value;
   let surname=document.getElementById("sname").value;
   let email=document.getElementById("e").value;
   let msg = document.getElementById("mesazh").value;
   
   let isValid =true;
   
   if(name==""){
    alert("Invalid Format:Name cannot be left blank");
    isValid=false;
   } 
/*
   let nameCharArray = name.split();
    	for(c in nameCharArray){
    		if(typeof c === "number"){
			alert("Invalid Format:Name cannot contain numbers");
            console.log("First Loop"+typeof c+"   "+(typeof c ==="number"))
			isValid=false;
            break;
		} 
    }
*/
    if(surname==""){
        alert("Invalid Format:Surname cannot be left blank");
        isValid=false;
           } 
  /*         
           let surnameCharArray = surname.split();
                for(c in surnameCharArray){
                    if(typeof c === "number"){
                    alert("Invalid Format:Surname cannot contain numbers");
                    isValid=false;
                } 
            }
   */         
    
   if(isValid==false)
        return;
  
    //console.log("Thank you "+name+" "+surname+" ,we will contact you soon...");
      
     contact = {
    name1:name,
    surname1:surname,
    email1:email,
    msg1:msg
   }

   console.log(contact.name1+""+contact.surname1+" "+contact.email1+""+contact.msg1);

 /*  module.exports = {
    contact
};*/

/*NL*/ contactArr.push(contact); 


//localStorage.setItem("contact",JSON.stringify(contact))
localStorage.setItem("contact",JSON.stringify(contactArr))

}



function contact2(){
    var name2=document.getElementById("name2").value;
    var email2=document.getElementById("email2").value;

    if(name2==" " || email2== " "){
        alert("Filled it out");
        return false;
      } 

}


//export default contact;