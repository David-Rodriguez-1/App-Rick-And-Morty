export const validate = (inputs) => {
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    let errors = {};
    (!inputs.email) ? errors.email = 'Email require' : errors.email = "";
    (inputs.email.length > 35) ? errors.email = 'Error' : errors.email = '';
    (!regexEmail.test(inputs.email)) ? errors.email = 'Debe ser un email válido' : errors.email = "";
    (!regexPassword.test(inputs.password)) ? errors.password = 'La contraseña debe tener entre 6 y 10 caracteres' : errors.password = '';

    return errors;
}