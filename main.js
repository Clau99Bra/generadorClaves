let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
  let numeroDigitado = parseInt(cantidad.value);

  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
    return; // Detenemos la ejecución si la cantidad es inválida
  }

  let password = '';
  for (let i = 0; i < numeroDigitado; i++) {
    let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
    password += caracterAleatorio;
  }

  contrasena.value = password;

  // Mensajes de fortaleza:
  if (numeroDigitado >= 8 && numeroDigitado <= 10) {
    alert("La contraseña es de fortaleza media.");
  }
  
  if (numeroDigitado > 10) {
    alert("La contraseña es fuerte.");
  }
}
// Agregando el evento click al botón
boton.addEventListener('click', generar);

// Limpiar la contraseña
function limpiar() {
  contrasena.value = '';
}
