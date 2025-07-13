let formulario = document.querySelector(".secundaria__formulario");
let inputNombre = document.getElementById("input__nombre");
let inputApellido = document.getElementById("input__apellido");
let inputEmail = document.getElementById("input__email");
let inputContraseña = document.getElementById("input__contraseña");
let errorParagraphNombre = document.getElementById("error__paragraph--nombre");
let errorParagraphApellido = document.getElementById("error__paragraph--apellido");
let errorParagraphEmail = document.getElementById("error__paragraph--email");
let errorParagraphContraseña = document.getElementById("error__paragraph--contraseña");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre= verificarParametros(inputNombre, errorParagraphNombre);
    let apellido = verificarParametros(inputApellido, errorParagraphApellido);
    let email = verificarParametros(inputEmail, errorParagraphEmail, true);
    let contraseña = verificarParametros(inputContraseña, errorParagraphContraseña);

    function verificarParametros(elementoFormulario, elementoParrafo, isCorreo = false){
        let valor = elementoFormulario.value.trim();
        if(valor == "" && isCorreo == false){
            elementoFormulario.classList.add("formulario__input--error");
            elementoParrafo.classList.add("formulario__error--active");
        } else if (isCorreo==true && !validarCorreo(valor)){
            elementoFormulario.classList.add("formulario__input--error");
            elementoParrafo.classList.add("formulario__error--active");
        } else{
            elementoFormulario.classList.remove("formulario__input--error")
            elementoParrafo.classList.remove("formulario__error--active");
            return true
        }
        return false;
    }

    if(nombre == true && apellido == true && email == true && contraseña == true){
        formulario.reset();
        console.log("Formulario validado");
    }

    // Regex para validar correo
    function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
    }
})



