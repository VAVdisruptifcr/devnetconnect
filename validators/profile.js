const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  //ternario asigna data.name si no está vacio
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "El handle debe ser entre 2 y 40 caracteres";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "El profile handle es requerido";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "El campo estatus es requerido";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "El campo skills es requerido";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "No es una url valida";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "No es una url valida";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "No es una url valida";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "No es una url valida";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "No es una url valida";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "No es una url valida";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
