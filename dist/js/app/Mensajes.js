'use strict'
// En js puro no se utiliza el signo de dolar, jquiery lo utiliza
//Así se usa el método click en jQuery, señalo el botón que quiero, o imagenes
// Evento de  carga
$(document).ready(()=>{
  $('#txtNombres').val('Selvin');
  $('#txtNombres').focus();
  $('#txtApellidos').val('Medina');
})

$('#btnSucess').click(()=>{
  MsgSucess('Éxito','Contacte al Administrador');
});

$('#btnDanger').click(()=>{
  MsgDanger('Error','Contacte al Administrador');
});

$('#btnInfo').click(()=>{
  MsgInfo('information','Contacte al Administrador');
});

$('#btnWarning').click(()=>{
  MsgWarning('Atención','Contacte al Administrador');
});

$('#btnAceptar').click(()=>{
  var Nombres;
  var Apellidos;
  Nombres = $('#txtNombres').val();
  Apellidos =$('#txtApellidos').val();
  if(Nombres == ""){
    MsgDanger('Error','El campo Nombres no puede estar vacío')
  }
  else if (Apellidos == "") {
    MsgDanger('Error','El campo Apellidos no puede estar vacío')
  }
  else{
      var Mensaje = 'Bienvenido ' + Nombres + ' ' + Apellidos;
      MsgPresentation('Hola', Mensaje )
  }
})

$('#btnPromediar').click(()=>{
  var n1,n2, n3, n4;
  n1 = $('#txtn1').val();
  n2 = $('#txtn2').val();
  n3 = $('#txtn3').val();
  n4 = $('#txtn4').val();
  var num1 = parseInt(n1);
  var num2 = parseInt(n2);
  var num3 = parseInt(n3);
  var num4 = parseInt(n4);
  var Resultado = (num1 + num2 + num3 + num4)/4;
  var Mensaje;
  if(Resultado < 70){
    Mensaje = 'Aplazado ' + Resultado;
  }
  else if(Resultado < 80){
      Mensaje = 'Bueno' + Resultado;
    }
  else if(Resultado < 90){
      Mensaje = 'Muy bien ' + Resultado;
    }
  else if(Resultado < 100){
      Mensaje = 'Excelente ' + Resultado;
    }
  else if(Resultado == 100){
      Mensaje = 'Perfecto ' + Resultado;
    }
    else {
      Mensaje = 'Error';
    }
  MsgPresentation('El promedio es:',Mensaje.toString());
})

$('#btnCalcular').click(()=>{
    var Nacimiento = parseInt($('#txtNacimiento').val());
    console.log('Nacimiento', Nacimiento);
    var Resultado = 2019 - Nacimiento;
    if(Resultado >= 21)
    MsgSucess('Sucess', 'Felicidades usted es mayor de edad');
    else
      MsgDanger('Error', 'Usted es muy pequeño');
});

$('#btnPrueba').click(()=>{
  var Prueba = parseInt($('#txtPrueba').val());
  var Resultado = Prueba * Prueba;
  MsgPresentation('Su resultado es: ', Resultado.toString());
});
