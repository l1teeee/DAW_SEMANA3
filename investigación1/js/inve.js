function saltos(valor) {
    var acumulado = 0;
    return function() {
      acumulado += valor; 
      alert (acumulado);   
    };
  } 
  
  var quintos = saltos(5);
  quintos(); 
  quintos(); 
  quintos(); 