const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  //ternario asigna data.whatever si no está vacio y si no asigna un string vacío
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "El comentario debe superar 10 y limitarse a 300 caracteres";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "El campo comentario es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
