import joi from "joi";

const meliponicultor = joi.object({
    name: joi.string().min(3).required(),
    phoneNumber: joi.string().min(10).required(),
    email: joi.string().email().required()
});

const bait = joi.object({
    meliponicultorId: joi.number().required(),
    beeSpecie: joi.string().min(3).required(),
    mlQuantity: joi.number().min(1).required(),
    installationDate: joi.date().required(),
    captureStatus: joi.boolean().required(),
    allowedTransfer: joi.boolean().required()
    
});

export = { meliponicultor, bait };

   
   