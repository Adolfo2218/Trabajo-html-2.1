document.getElementById("crearCarta").addEventListener("click", function() {
    var rut = document.getElementById("rut").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var profesion = document.getElementById("profesion").value;
    var motivacion = document.getElementById("motivacion").value;
    
    var carta = "Estimado/a,\n\nMe dirijo a usted en calidad de postulante para el trabajo de apoyo ambiental en la isla de Chiloé. A continuación, presento mis datos e intención de postulación:\n\n";
    carta += "RUT: " + rut + "\n";
    carta += "Nombre completo: " + nombre + " " + apellidoPaterno + " " + apellidoMaterno + "\n";
    carta += "Fecha de nacimiento: " + fechaNacimiento + "\n";
    carta += "Género: " + genero + "\n";
    carta += "Correo electrónico: " + email + "\n";
    carta += "Número de celular: " + celular + "\n";
    carta += "Profesión: " + profesion + "\n";
    carta += "Motivación para postular: " + motivacion + "\n\n";
    carta += "Quedo a disposición para cualquier información adicional que requieran. ¡Muchas gracias por considerar mi postulación!\n\nAtentamente,\n\n[Firma]";
    
    document.getElementById("carta").value = carta;
});
