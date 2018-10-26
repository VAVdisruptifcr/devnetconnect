const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  //ternario asigna data.name si no está vacio
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "El campo centro de enseñanza es obligatorio";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "El campo de grado es requerido";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "El campo de estudio es requerido";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "La fecha del estudio es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
