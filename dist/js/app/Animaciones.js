function Alerta(){
  alert('Hola mundo');
}

function NumUno(){
calculator.Input.value +="1";
}

function NumDos(){
calculator.Input.value +="2";
}

function NumTres(){
calculator.Input.value +="3";
}

function NumCuatro(){
calculator.Input.value +="4";
}

function NumCinco(){
calculator.Input.value +="5";
}

function NumSeis(){
calculator.Input.value +="6";
}

function NumSiete(){
calculator.Input.value +="7";
}

function NumOcho(){
calculator.Input.value +="8";
}

function NumNueve(){
calculator.Input.value +="9";
}

function Igual(){
calculator.Input.value +=" = ";
}

function Por(){
calculator.Input.value +=" * ";
}

function Mas(){
calculator.Input.value +=" + ";
}
function Menos(){
calculator.Input.value +=" - ";
}

function Entre(){
calculator.Input.value +=" / ";
}

function Borrar(){
  calculator.Input.value='';
}
function NumCero(){
  calculator.Input.value+='0';
}

function Igual(){
  calculator.Input.value=eval(calculator.Input.value);
}
function Potencia(){
  var Calculadora = calculator.Input.value;
  if(Calculadora.includes(" ")){
    var Potencia = calculator.Input.value;
    var matriz = Potencia.split(" ");
    calculator.Input.value = Math.pow(matriz[0], matriz[1]);
  }else {
    calculator.Input.value = Math.pow(calculator.Input.value, calculator.Input.value);
  }
}

function Raiz(){
  calculator.Input.value = Math.sqrt(calculator.Input.value);
}
