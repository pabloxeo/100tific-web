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

/*
Modificar el tamaño cuando abrimos la barra lateral
*/ 

function openNav() {
    if(document.getElementById("wrapper_pr").style.marginRight == "2%"){
        document.getElementById("mySidebar").style.width = "400px";
        document.getElementById("wrapper_pr").style.marginRight = "400px";
    }else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("wrapper_pr").style.marginRight= "2%";
    }
}

/*
Ajuste al cerrar barra lateral
*/

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("wrapper_pr").style.marginRight= "2%";
}

/*
Funcion para enviar comentario
*/

function comentar(){
    var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(document.getElementById("n").value == "" 
    || document.getElementById("e").value == "" 
    || document.getElementById("c").value == ""
    ){
    }else if(re.test(document.getElementById("e").value)){
        document.getElementById("comment_ej").style.visibility = "visible";
        document.getElementById("nombre_ej").innerHTML = document.getElementById("n").value;
        document.getElementById("correo_ej").innerHTML = document.getElementById("e").value;    
        document.getElementById("texto_ej").innerHTML = document.getElementById("c").value;
        document.getElementById("fecha").innerHTML = (new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':'); 
    } 
}
/*
Funcion de escucha para reemplazar palabras al escribir
*/

document.getElementById("c").addEventListener("keypress", function(){
    var texto = document.getElementById("c").value; 
    texto = texto.replace(/joder|niño|carrera|casa/gi, "*****");
    document.getElementById("c").value = texto;
});
