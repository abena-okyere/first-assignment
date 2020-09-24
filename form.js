function pop(){
    alert("Thank you! Your form is submitted");
}

    document.getElementById("First_name").innerHTML = localStorage.getItem("fnm");
    document.getElementById("Middle_name").innerHTML = localStorage.getItem("mnm");
    document.getElementById("Last_name").innerHTML = localStorage.getItem("lnm");
    document.getElementById("Ema_il").innerHTML = localStorage.getItem("eml");
    document.getElementById("Pho_ne").innerHTML = localStorage.getItem("phn");
    document.getElementById("Add_ress").innerHTML = localStorage.getItem("adr");
    document.getElementById("Gen_der").innerHTML = localStorage.getItem("gen");
