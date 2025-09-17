function envioFormulario() {
    var name = document.getElementById("name").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    console.log(name);
    console.log(correo);
    console.log(mensaje);

    event.preventDefault();
}

