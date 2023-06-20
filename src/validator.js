const validator = { //validator contiene dos funciones  
  isValid, maskify,
};
function isValid (number) { //definicion de la funcion isValid
  const reverseNumber = number.split("").map(Number).reverse(); //se crea un nuevo array con los numero invertidos
  let sumaPar = 0; //variable suma numero posicion par inicia con 0
  let sumaImpar = 0; //variable suma numero posicion impar inicia con 0
  for (let i = 0; i < reverseNumber.length; i++) { //bucle for variable i inicia en 0 si i es menor q el array se incrementa el valor de 1 para continuar en cada elemento
    if (i % 2 === 1) { //verificamos si es impar
      const resultPares = reverseNumber[i] * 2; //crea la variable resultPares para guardar el resultado
      if (resultPares >= 10) { //se verifica si es mayor o igual a 10
        sumaPar += Math.floor(resultPares / 10) + (resultPares % 10); //si es mayor se realiza la suma del numero entero y del modulo 
      }
      else {
        sumaPar += resultPares; //si es menor q 10 el resultado se suma directo a la variable
      }
    }
    else {
      sumaImpar += reverseNumber[i]; // si no se cumple la condicion anterior se suma el numero directamente en la variable
    }
  }
  const sumaTotal = sumaImpar + sumaPar; //suma el resultado en las varibales 
    
  if (sumaTotal % 10 === 0) { // si el valor de la variable es divide entre 10 y no deja residuo 
    return true; // es verdadera
  }
  else {
    return false; //sino es falsa
  }
}
    
function maskify (number) { //funcion enmascarar numero
  let numeroEnmascarado = ""; //crea una cadena vacia
  const cadena = number.length; // declara la variable cadena contiene la longitud del numero de la tarjeta
  for (let i = 0; i < number.length; i++) { //bucle for itera sobre los numeros ingresados
    if (i>(cadena-5)) { // si la cadena el indice i es mayor a la longitud del numero menos 5 se concatena al valor actual
      numeroEnmascarado = numeroEnmascarado + number[i];
    }
    else {
      numeroEnmascarado = numeroEnmascarado + "#"; // los demas numeros se concatenan en #
    }
  }
  return numeroEnmascarado; //nos devuelve el numero enmascarado
  
} 

export default validator;