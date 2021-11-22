let data = [];

let credenciales = obtenerData("credenciales");

$(document).ready(function () {
    cargarPerfil(credenciales);
});

/**
 * Método para cargar información del perfil del usuario en pantalla.
 * @param {JSON} data 
 */
let cargarPerfil = function (data) {
    if (data) {
        $("#lbNombre").html(data.nombre);
        $("#lbCuenta").html(data.cuenta);
    }
};