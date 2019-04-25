'use strict'
function MsgSucess(Titulo, Mensaje){
  iziToast.success({
    title:Titulo,
    message: Mensaje,
  });
};

function MsgDanger(Titulo, Mensaje){
  iziToast.error({
    title:Titulo,
    message: Mensaje,
  });
};

function MsgWarning(Titulo, Mensaje){
  iziToast.warning({
    title:Titulo,
    message: Mensaje,
  });
};


function MsgInfo(Titulo, Mensaje){
  iziToast.info({
    title:Titulo,
    message: Mensaje,
  });
};
