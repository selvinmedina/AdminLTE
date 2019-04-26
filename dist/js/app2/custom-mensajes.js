'use strict'
function MsgSucess2(Titulo, Mensaje){
  iziToast.sucess({
      title: Titulo,
      message: Mensaje
  });
};

function MsgDanger2(Titulo, Mensaje){
  iziToast.error({
      title: Titulo,
      message: Mensaje
  });
};

function MsgPresentation2(Titulo, Mensaje){
  iziToast.show({
      theme: 'dark',
      title: Titulo,
      message: Mensaje,
      icon: 'fa fa-user',
      position: 'center',
      progressBarColor: 'rgb(0, 255, 184)',
      buttons:[
        '<button>Ok</button>', function(Instance, Toast){
          alert('Hola Mundo');
        }, true],
        ['<button>Close</button>', function(Instance, Toast){
            Instance.hide({
              transitionOut:'fadeOutUp',
              onClosing:function(Instance, Toast, ClosedBy){
                console.info('closedBy: ' + closedBy);
              }
            }, Toast, 'buttonName');
        }]
      ],
  });
};
