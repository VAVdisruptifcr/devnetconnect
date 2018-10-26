const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //ternario asigna data.name si no está vacio
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""; //password de confirmacion

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "El nombre debe estar entre 2 y 30 caracteres";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "El campo nombre es requerido";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo email es requerido";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Correo invalido";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo password es requerido";
  }

  if (!Validator.isLength(data.password, { min: 5, max: 30 })) {
    errors.password =
      "La contraseña debe superar 5 caracteres y tiene un tope de 30";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas deben coincidir";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
