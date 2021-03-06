const Joi = require('@hapi/joi');



const registerValidation = data =>{
    const schema = Joi.object({
        _id : Joi.string(),
        picurl: Joi.string(),
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        ConfirmPassword : Joi.string().required(),
        date : Joi.string(),
        __v : Joi.number()
    });
    return schema.validate(data);
};

const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;