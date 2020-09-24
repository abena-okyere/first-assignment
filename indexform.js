function onSubmit(event) 
 {
  event.preventDefault();
  const firstName=document.getElementById("addForm").elements["first"].value;
  const middleName=document.getElementById("addForm").elements["middle"].value;
  const lastName=document.getElementById("addForm").elements["last"].value;
  const phoneNumber=document.getElementById("addForm").elements["phoneNum"].value;
  const maiL=document.getElementById("addForm").elements["email"].value;
  const add_ress=document.getElementById("addForm").elements["addy"].value;
  const gend=document.getElementById("addForm").elements["gender"].value;
    if (firstName == ""|| middleName==""|| lastName== ""|| phoneNumber== ""|| maiL ==""|| add_ress=="") {
   alert("Please fill all blank spaces");}
    
/*to validate first name:*/
const fname= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
if(firstName !="" && firstName.match(fname)){
  const error=document.getElementById("fnameError");
  error.innerHTML="";
} else if (firstName !="" && !firstName.match(fname)){
  alert("Invalid input");
}
 else if (firstName ==""){
   alert("Please enter your first name.");
 } 

 /*to validate middle name:*/
 const mname= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
 if(middleName !="" && middleName.match(mname)){
   const eror=document.getElementById("mnameError");
   eror.innerHTML="";
 } else if (middleName !="" && !middleName.match(mname)){
   alert("Invalid Input");
 } else if (middleName ==""){
   alert("Please enter middle name");
 }
 /*to validate last name:*/
 const lname= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
 if(lastName !="" && lastName.match(lname)){
   const errror=document.getElementById("lnameError");
   errror.innerHTML="";
 } else if(lastName !="" && !lastName.match(lname)){
   alert("Invalid Input");
 } else if (lastName ==""){
   alert("Please enter last name");
 }
 /*to validate phone number*/
 const phone= /^\d{10}$/;
 if(phoneNumber !="" && phoneNumber.match(phone)){
   const error= document.getElementById("numbError");
   error.innerHTML="";
 } else if(phoneNumber !="" && !phoneNumber.match(phone)){
   alert("Invalid Input");
 } else if (phoneNumber ==""){
   alert("Please enter phone numer");
 }
 /*to validate email address:*/
 const ail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(maiL !="" && maiL.match(ail)){
   const error= document.getElementById("mailError");
   error.innerHTML="";
 } else if(maiL !="" && !maiL.match(ail)){
   alert("Invalid Input");
 } else if (maiL ==""){
  alert("Please enter phone number");
 }
 /*to validate address:*/
 const addr= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
 if(add_ress !="" && address.match(addr)){
   const eror=document.getElementById("addrsError");
   eror.innerHTML="";
 } else if (add_ress !="" && !add_ress.match(addr)){
   alert("Invalid Input");
 } else if (add_ress ==""){
   alert("Please enter address");
 }
/*
 const First_name= document.getElementById("addForm").elements["first"].value;
 const Middle_name= document.getElementById("addForm").elements["middle"].value;
    const Last_name= document.getElementById("addForm").elements["lname"].value;
    const Ema_il= document.getElementById("addForm").elements["e_mail"].value;
    const Pho_ne= document.getElementById("addForm").elements["phone_num"].value;
    const Add_ress= document.getElementById("addForm").elements["address"].value;
    const Gen_der = document.getElementById("addForm").elements["gender"].value;
*/
    /* Stored within the local storage in the window */
    localStorage.setItem("fnm", firstName);
    localStorage.setItem("mnm", middleName);
    localStorage.setItem("lnm", lastName);
    localStorage.setItem("eml", maiL);
    localStorage.setItem("phn", phoneNumber);
    localStorage.setItem("adr", add_ress);
    localStorage.setItem("gen", gend);

   window.location.href = "output.html";
  }
  const form = document.getElementById("addForm");
    form.addEventListener('submit', onSubmit);


