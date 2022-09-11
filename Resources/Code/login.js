alert("Demo version usuario: admin@admin.com y contraseña: admin");

function Login(){ 
    if (document.form.username.value == "admin@admin.com" && document.form.password.value == "admin"){
        document.form.submit();
    }else{
        alert("Datos incorrectos");
    }
}