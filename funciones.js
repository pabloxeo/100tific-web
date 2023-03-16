// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
function changeCSS(){
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "portada.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "portada_invert.css";
    // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "portada.css";
    }
}

function openNav() {
    if(document.getElementById("wrapper_pr").style.marginRight == "2%"){
        document.getElementById("mySidebar").style.width = "400px";
        document.getElementById("wrapper_pr").style.marginRight = "400px";
    }else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("wrapper_pr").style.marginRight= "2%";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("wrapper_pr").style.marginRight= "2%";
}

function comentar(){
    document.getElementById("nombre_ej").innerHTML = document.getElementById("n").value;
    document.getElementById("correo_ej").innerHTML = document.getElementById("e").value;
    document.getElementById("texto_ej").innerHTML = document.getElementById("c").value; 
}

