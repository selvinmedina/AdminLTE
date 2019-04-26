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

function MsgPresentation(Titulo, Mensaje){
  iziToast.show({
      theme: 'dark',
      icon: 'fa fa-user',
      title: Titulo,
      message: Mensaje,
      position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
      progressBarColor: 'rgb(0, 255, 184)',
      buttons: [
          ['<button>Ok</button>', function (instance, toast) {
              alert("Hello world!");
          }, true], // true to focus
          ['<button>Close</button>', function (instance, toast) {
              instance.hide({
                  transitionOut: 'fadeOutUp',
                  onClosing: function(instance, toast, closedBy){
                      console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
                  }
              }, toast, 'buttonName');
          }]
      ],
  });
};
