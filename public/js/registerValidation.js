let form = qs('#register');
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let spanName = qs('#name');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let errors = {};

    /* validation name */
    if (form.name.value.length == 0) {
        errors.name = 'El campo nombre no debe estar vacio';
        qs('#name').innerText = errors.name;
    } else if (form.name.value.length < 8) {
        errors.name = 'El campo nombre debe tener como minimo 8 caracteres';
        qs('#name').innerText = errors.name;
    } else {
        delete errors.name;
        qs('#name').innerText = '';

    }

    /* validation email */
    if (form.email.value.length == 0) {
        errors.email = 'El campo email no debe estar vacio';
        qs('#email').innerText = errors.email;
    }else if (!regexEmail.test(form.email.value)) {
        errors.email = 'Debe ser un email valido';
        qs('#email').innerText = errors.email;
    }else {
        qs('#email').style.display = 'none';
    }


    if(Object.keys(errors).length == 0){
        form.submit();
    }
    
})