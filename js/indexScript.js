function alertaRegistro() {
  let nombreRegistro = document.getElementById("nombreRegistro").value;
  let fechaRegistro = document.getElementById("fechaRegistro").value;
  let procedimientoRegistro = document.getElementById(
    "procedimientoRegistro"
  ).value;
  let proxControlRegistro = document.getElementById(
    "proxControlRegistro"
  ).value;
  let observacionesRegistro = document.getElementById(
    "observacionesRegistro"
  ).value;
  let precioRegistro = document.getElementById("precioRegistro").value;
  let errores = "";
  if (nombreRegistro.length <= 1) {
    errores =
      errores + "NOMBRE ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER\n";
  }
  if (fechaRegistro.length == 0) {
    errores = errores + "FECHA ES CAMPO REQUERIDO\n";
  }
  if (procedimientoRegistro.length == 0) {
    errores = errores + "PROCEDIMIENTO ES CAMPO REQUERIDO\n";
  }
  if (proxControlRegistro.length == 0) {
    errores = errores + "PRÓXIMO CONTROL ES CAMPO REQUERIDO\n";
  }
  if (observacionesRegistro.length == 0) {
    errores = errores + "OBSERVACIONES ES CAMPO REQUERIDO";
  }
  if (precioRegistro.length == 0) {
    errores = errores + "PRECIO ES CAMPO REQUERIDO";
  }
  if (errores != 0) {
    swal("Registro Fallido", errores, "error");
  } else {
    swal("Registro Exitoso", "Entrada Agregada", "success");
  }

  console.log(
    "Nombre " +
      nombreRegistro +
      " Fecha " +
      fechaRegistro +
      " Procedimiento " +
      procedimientoRegistro +
      " Próximo Control " +
      proxControlRegistro +
      " Observaciones " +
      observacionesRegistro +
      " Precio " +
      precioRegistro
  );

  console.log(
    "Largo Nombre " +
      nombreRegistro.length +
      ", Largo Fecha " +
      fechaRegistro.length +
      ", Largo  Procedimiento " +
      procedimientoRegistro.length +
      ", Largo  Proximo Control " +
      proxControlRegistro.length +
      ", Largo  Observaciones " +
      observacionesRegistro.length +
      ", Largo  Precio " +
      precioRegistro.length
  );
  return false;
}

$(document).ready(function () {
  $.ajax({
    url: "https://huachitos.cl/api/animales/tipo/gato",
    dataType: "json",
    success: function (informacion) {
      var mascotas = informacion.data;
      for (var i = 0; i < mascotas.length; i++) {
        var fila = "";
        fila =
          "<tr><td><img src='" +
          mascotas[i].imagen +
          "' width='50'  height='50'></td><td>" +
          mascotas[i].nombre +
          "</td><td>" +
          mascotas[i].edad +
          "</td><td>" +
          mascotas[i].genero +
          "</td><td>" +
          mascotas[i].comuna +
          "</td><td>" +
          mascotas[i].estado +
          "</td></tr>";
        console.log(fila);
        $("#bodyTablaAdopcion").append(fila);
      }
      let mitabla = new DataTable("#adopcion", {
        layout: {
          topStart: {
            buttons: ["csv", "excel", "pdf"],
          },
        },
      });
    },
  });
});
