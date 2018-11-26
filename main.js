var $tablaBody = $('#listaProductos tbody');

$(document).ready(function() {
    $('#btnAgregar').on('click', function (event) {
        var producto = $('#productoNombre').val();
        var cantidad = (parseInt($('#productoCantidad').val()) > 0) ? $('#productoCantidad').val() : 0;
        agregarProducto(producto, cantidad);
    });

    $('#listaProductos').on('click', '.boton-eliminar', function (event) {
        eliminar($(event.target).parent().parent())
    });
});

function agregarProducto(producto, cantidad) {
    var trHtml = `<tr>
                        <td>${producto}</td>
                        <td>${cantidad}</td>
                        <td><button type="button" class="btn btn-sm btn-danger boton-eliminar">Eliminar</button><td>
                    </tr>`;
    $tablaBody.append(trHtml);
}

function eliminar(row) {
    row.remove();
}