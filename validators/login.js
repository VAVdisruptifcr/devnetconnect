const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //ternario asigna data.name si no está vacio
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Correo invalido";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo email es requerido";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo password es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
