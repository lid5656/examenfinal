function login(){
var user,pass;
user=document.getElementById("email").value;
pass=document.getElementById("contraseña").value;


if (user =="LIDIA" || user =="lidia" ) {
    
    if ( pass == 1258  ) {
        window.location="https://lid5656.github.io/Pagina-gym-shaddai/"
    
    }
    else{
    window.alert("contraseña incorrecto")
    }
}
else
{
    window.alert("Usuario incorrecto")
}
}