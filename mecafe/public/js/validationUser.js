
// seleccion del formulario
let form = document.getElementById('registerForm__form');

// seleccion de todos los input
let input = document.querySelectorAll('.registerForm__form input');


// Declaraciòn de expresiones regulares
const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  lastName: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 a 14 numeros.
  password: /^.{8,250}$/, // 8 a 250 digitos.
}

// Declaracion de objecto para validar si el campo esta correcto al enviar
const fields = {
  name: false,
  lastName: false,
  email: false,
  phone: false,
  password: false
}

// validacion de los campos del formulario
const validationsInputs = (expression, input, campo) => {
  if(expression.test(input.value)){
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.remove('registerForm_errorItem-incorrecto')
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.add('registerForm_errorItem-correcto')
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.add('fa-check-circle');
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.remove('fa-times-circle');
    document.getElementById(`menssageErrorGeneral_${campo}`).classList.remove('register_formErrorFrontGeneral-active');
    fields[campo] = true;
  }else {
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.add('registerForm_errorItem-incorrecto');
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.remove('registerForm_errorItem-correcto')
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.add('fa-times-circle');
    document.querySelector(`.registerForm_errorItem_${campo}`).classList.remove('fa-check-circle');
    document.getElementById(`menssageErrorGeneral_${campo}`).classList.add('register_formErrorFrontGeneral-active');
    fields[campo] = false;
  }
}

// validacion de la confirmacion de las contraseñas
const validationConfirmPassword= () =>{
  // se realiza los selectors
  let inputPassword = document.getElementById('password');
  let inputConfirmPassword = document.getElementById('confirmPassword');
  // se pone la condicion
  if (inputPassword.value !== inputConfirmPassword.value){
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.add('registerForm_errorItem-incorrecto');
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.remove('registerForm_errorItem-correcto')
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.add('fa-times-circle');
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.remove('fa-check-circle');
    document.getElementById('menssageErrorGeneral_confirmPassword').classList.add('register_formErrorFrontGeneral-active');
    fields['password'] = false;
  }else{
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.remove('registerForm_errorItem-incorrecto');
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.add('registerForm_errorItem-correcto')
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.remove('fa-times-circle');
    document.querySelector('.registerForm_errorItem_confirmPassword').classList.add('fa-check-circle');
    document.getElementById('menssageErrorGeneral_confirmPassword').classList.remove('register_formErrorFrontGeneral-active');
    fields['password'] = true;
  }

}

// Validaciones de cada campo segùn la expresiones regulares ya definidas
let validationform = (e) => {
  switch (e.target.name) {
    case 'name' :
      validationsInputs(expressions.name, e.target, 'name');
    break;
    case 'lastName' :
      validationsInputs(expressions.lastName, e.target, 'lastName');
      break;
    case 'email' :
      validationsInputs(expressions.email, e.target, 'email');
      break;
    case 'phone' :
      validationsInputs(expressions.phone, e.target, 'phone');
      break;
    case 'password' :
      validationsInputs(expressions.password, e.target, 'password');
      validationConfirmPassword();
      break;
    case 'confirmPassword' :
      validationConfirmPassword();
      break;
  }

}

// validacion cuando levantan tecla o le den fuera del formulario se ejecute
  input.forEach((input) => {
  input.addEventListener('keyup', validationform);
  input.addEventListener('blur', validationform);
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
// condicional que valida si todos los campos estàn diligenciados correctamente
  if(fields.name && fields.lastName && fields.email && fields.phone && fields.password){
    console.log('nadaaaa')
    console.log(document.getElementById('registerForm__form'))
      document.getElementById('registerForm__form').submit();
      console.log('logrado')

      // form.reset();
      // document.querySelectorAll('.registerForm_errorItem-correcto').forEach((icon) => {
      //   icon.classList.remove('registerForm_errorItem-correcto');
      //   document.getElementById('menssageError').classList.remove('registerForm__menssageError-active');
      //   console.log('nadaaaa')
      //   return true,
      //   console.log('logrado')
      // })
  }else {
    document.getElementById('menssageError').classList.add('registerForm__menssageError-active');
  }
})