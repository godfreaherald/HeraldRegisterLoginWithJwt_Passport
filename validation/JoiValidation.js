const Joi = require("@hapi/joi");

const RegistrationSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(6),
  email: Joi.string()
    .required()
    .email(),
  password: Joi.string()
    .required()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  password2: Joi.ref("password")
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .email(),
  password: Joi.string()
    .required()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});

module.exports.RegistrationValidation = data => {
  console.log(data);
  return RegistrationSchema.validate(data);
};

module.exports.LoginValidation = data => {
  console.log(data);
  return loginSchema.validate(data);
};
