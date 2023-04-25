import Joi from "joi";

export const countriesNameSchema = Joi.object({
    country:Joi.string().required()
});