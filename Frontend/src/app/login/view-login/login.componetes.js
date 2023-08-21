const formulario= document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}
const validarFormulario=(e) =>{
	switch (e.target.name){
        case "correo":
			validarCampo(expresiones.correo, e.target,'correo');

		break;
		
		case "password":
			validarCampo(expresiones.password,e.target,'password');
			validarPassword2();


	}
	

}

const validarCampo = (expresion,input,campo)=>{
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		//Remueve el icono de incorrecto
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		//agrega el icono de correcto
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

	}else{
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		//Remueve el icono de incorrecto
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		//agrega el icono de correcto
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
	}
}



inputs.forEach((inputs) =>{
	inputs.addEventListener('keyup',validarFormulario);
	inputs.addEventListener('blur',validarFormulario);


});
formulario.addEventListener('submit',(e)=>{
	e.preventDefault();


});