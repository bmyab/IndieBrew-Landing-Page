const formulario  = document.querySelector('#formulario');
// console.log(formulario)


formulario.addEventListener('submit' , e=>{
  e.preventDefault();

  const email = formulario['email'].value;
  const fullName = formulario['name'].value;
  const password = formulario['password'].value

  console.log(email.length);
  console.log(fullName.length);
  console.log(password.length);
  
  if(email === ''){
    addError('email' , 'Todos los campos son obligatorios');
  }else if(!isValid(email)){
    addError( 'email', 'Ingrese un email Valido');
  }else{
    removeError('email')
  }
  if(fullName === ''){
    addError('name', 'Todos los Campos son obligatorios');
  }else{
    removeError('name')
  }

  if(password === ''){
    addError('password', 'Todos los Campos son obligatorios');
    return
  }else if (password.length < 8){
    addError('password' , 'Necesita mas de 8 caracteres')
  }else{
    removeError('password')
  }
})


function addError(campo,mensaje){
  const inputControl = formulario[campo].parentNode;
  inputControl.classList.add('error');

  const small = formulario[campo].parentNode.querySelector('small');
  small.innerText = mensaje;
  small.style.opacity = '1';
}
function removeError(campo){
  const inputControl = formulario[campo].parentNode;
  inputControl.classList.remove('error');
  inputControl.classList.add('success')

  const small = formulario[campo].parentNode.querySelector('small');
  small.style.opacity = '0'
}

function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}