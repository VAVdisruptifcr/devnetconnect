const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  //ternario asigna data.whatever si no está vacio
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "El titulo del trabajo es requerido";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "El campo de compañía es requerido";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "El campo fecha de inicio es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
