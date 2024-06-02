function alertaContacto() {
  let nombreContacto = document.getElementById("nombreContacto").value;
  let fechaContacto = document.getElementById("fechaContacto").value;
  let emailContacto = document.getElementById("emailContacto").value;
  let numeroContacto = document.getElementById("numeroContacto").value;
  let errores = "";
  if (nombreContacto.length <= 1) {
    errores =
      errores + "NOMBRE ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER\n";
  }
  if (fechaContacto.length == 0) {
    errores = errores + "FECHA ES CAMPO REQUERIDO\n";
  }
  if (emailContacto.length == 0) {
    errores = errores + "EMAIL ES CAMPO REQUERIDO\n";
  }
  if (numeroContacto.length == 0) {
    errores = errores + "NUMERO ES CAMPO REQUERIDO\n";
  }
  if (errores != 0) {
    swal("Registro Fallido", errores, "error");
  } else {
    swal("Registro Exitoso", "Nos comunicaremos en breve", "success");
  }

  console.log(
    "Nombre " +
      nombreContacto +
      " Fecha " +
      fechaContacto +
      " Email " +
      emailContacto +
      " Número " +
      numeroContacto
  );

  console.log(
    "Largo Nombre " +
      nombreContacto.length +
      ", Largo Fecha " +
      fechaContacto.length +
      ", Largo  Email " +
      emailContacto.length +
      ", Largo  Número " +
      numeroContacto.length
  );
  return false;
}
