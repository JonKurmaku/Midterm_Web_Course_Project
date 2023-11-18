//import contact  from "../contact pages/contact.js";

const button=document.getElementById("logOut");
button.addEventListener("click",()=>{
    window.location.assign("../login/login.html");
})

const ordersTableBody = document.getElementsByTagName("tbody")[0]
const tsTableBody = document.getElementsByTagName("tbody")[1]

const storedContact = JSON.parse(localStorage.getItem("contact"))
const storedTS = JSON.parse(localStorage.getItem("tservice"))

/*
function populateTable(){
   
        const newRowHtml = `<tr>
            <td>${storedContact.name1}</td>
            <td>${storedContact.surname1}</td>
            <td>${storedContact.email1}</td>
            <td>${storedContact.msg1}</td>
        </tr>`;

        ordersTableBody.innerHTML+=newRowHtml;
    }
*/

function populateTable(){
   let contactAppendHtml =``
    for(const c of storedContact){
    const newRowHtml = `<tr>
        <td>${c.name1}</td>
        <td>${c.surname1}</td>
        <td>${c.email1}</td>
        <td>${c.msg1}</td>
    </tr>`;
        contactAppendHtml+=newRowHtml
    }
ordersTableBody.innerHTML+=contactAppendHtml;


let tsAppendHtml =``
    for(const c of storedTS){
    const newRowHtml = `<tr>
        <td>${c.name1}</td>
        <td>${c.surname1}</td>
        <td>${c.date1}</td>
        <td>${c.type1}</td>
    </tr>`;
        tsAppendHtml+=newRowHtml
    }
tsTableBody.innerHTML+=tsAppendHtml;
}

populateTable();