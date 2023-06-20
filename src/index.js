import validator from './validator.js';

const modal = document.querySelector("#modal"); // declaramos variable modal 
const myForm = document.querySelector("#form"); // declaramos variable myForm

document.querySelector("#myBtn").addEventListener("click", () => modal.style.display = "block"); // se agrega un evento de escucha al elemento del dom para q muestre la pantalla modal
document.querySelector(".close").addEventListener("click", () => { 
  modal.style.display = "none"; // cierre de ventana modal
  clearFormValues(); // funcion reiniciar el formulario
});

function clearFormValues() { // funcion para reiniciar el formulario
  const elements = ["nroTarjeta", "donanteName", "codeVer", "validar", "maskedCard"]; //array con los ids de los elementos que se van a reiniciar
  elements.forEach(element => document.getElementById(element).textContent = ""); // se establece el contenido en una cadena vacia para borrar el contenido existente
  myForm.reset(); // reestablece el formulario a su valor predeterminado
}

document.getElementById("myDonation").addEventListener("click", (e) => { //funciones al dar click en el boton
  e.preventDefault(); //evita q se envie el formulario al darle click

  const [ //declaramos las variables hacemos un solo llamado al document.getElementById
    creditCardNumber, nombreDonante, cvv, nroTarjeta, donanteName, codeVer, validar, maskedCard] = 
    ["creditCardNumber", "nombreDonante", "cvv", "nroTarjeta", "donanteName", "codeVer", "validar", "maskedCard" ].map(id => document.getElementById(id)); //es un nuevo array que contiene los elementos seleccionados del DOM

  [nroTarjeta, donanteName, codeVer].forEach(errorElement => errorElement.textContent = ""); // elimina los mensajes de error antes de reestablecer el formulario

  if (creditCardNumber.value === "") { //si el valor del campo nro tarjeta esta vacio arroja mensaje 
    nroTarjeta.textContent = "Introduce un número de tarjeta.";
    return;
  }

  if (nombreDonante.value === "") { //si el valor del campo nombre esta vacio arroja mensaje
    donanteName.textContent = "Introduce nombre.";
    return;
  }

  if (cvv.value === "") { // si el valor del campo cvv esta vacio arroja mensaje
    codeVer.textContent = "Introduce CVV.";
    return;
  }
  // resultado, traemos la funcion del isvalid y maskify nos indica si es valida o invalida y nos muestra el numero enmascarado
  const result = validator.isValid(creditCardNumber.value);
  validar.innerHTML = result ? "Tarjeta Válida" : "Tarjeta Inválida";
  maskedCard.innerHTML = validator.maskify(creditCardNumber.value);
});
