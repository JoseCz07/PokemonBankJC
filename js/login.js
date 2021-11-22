//#region Crea credenciales por defecto.
let credenciales = {
    nombre: "Ash Ketchum",
    cuenta: "0987654321",
    pin: 1234,
    saldoInicial: 500.00
}

guardarData("credenciales", credenciales);
//#endregion

let validator = new FormValidator("frmLogin", [{
    name: 'txtPin',
    display: 'PIN',
    rules: 'required|min_length[4]'
}], function(errors, evt) {
    let mensaje = '';
    evt.preventDefault();
    if (errors.length > 0) {
        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
            mensaje += errors[i].message;
        }
        swal({ title: mensaje, icon: "error"}).then((value) => { $("#txtPin").focus(); $("#txtPin").select(); });
    } else {
        if($("#txtPin").val() != credenciales.pin)
        {
            swal({ title: "PIN Incorrecto", icon: "error"}).then((value) => { $("#txtPin").focus(); $("#txtPin").select(); });
        }
        else {
            window.location.href = "options.html";
        }
    }
});

$("#txtPin").focus();