function buttonsub(){
   let n=document.getElementById("name").value
   let s=document.getElementById("sname").value
    window.alert("Thank you "+n+" "+s+" ,we will contact you soon...")
}
function contact2(){
    var name2=document.getElementById("name2").value;
    var email2=document.getElementById("email2").value;

    if(name2==" " || email2== " "){
        alert("Filled it out");
        return false;
      } 

}