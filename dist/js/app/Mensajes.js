'use strict'
// En js puro no se utiliza el signo de dolar, jquiery lo utiliza
//Así se usa el método click en jQuery, señalo el botón que quiero, o imagenes
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
