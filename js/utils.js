/**
 * Método para almacenar datos en el localStorage.
 * @param {JSON} data 
 */
var guardarData = function (nombreData, data) {
    localStorage.setItem(nombreData, JSON.stringify(data));
};

/**
 * Método para obtener datos almacenados en el localStorage.
 * @returns {JSON} data
 */
var obtenerData = function (nombreData) {
    let data = [];
    data = localStorage.getItem(nombreData) === null ? [] : JSON.parse(localStorage.getItem(nombreData));

    return data;
}

/**
 * Valida si la techa presionada es un número o no.
 * @param {*} evt 
 * @returns {boolean} Devuelve true o false.
 */
var onlyNumberKey = function (evt) {

    // Only ASCII charactar in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

/**
 * Valida si la techa presionada es un número o no.
 * @param {*} evt 
 * @returns {boolean} Devuelve true o false.
 */
var onlyNumberKeyAndPoint = function (evt) {

    // Only ASCII charactar in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && ASCIICode !== 47 && (ASCIICode < 46 || ASCIICode > 57))
        return false;
    return true;
}

/**
 * Método para la generación de archivo PDF.
 */
var generarComprobante = function () {
    $('#comprobante').show();
    var pdf = new jsPDF('p', 'pt', 'letter'),
        source = $('#comprobante')[0],
        margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };

    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
        },
        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save('Comprobante.pdf');
        },
        margins
    );

    $('#comprobante').hide();
};