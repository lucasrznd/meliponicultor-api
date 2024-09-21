import joi from "joi";

const meliponicultor = joi.object({
    name: joi.string().min(3).required(),
    phoneNumber: joi.string().min(10).required(),
    email: joi.string().email().required()
});

export = { meliponicultor };