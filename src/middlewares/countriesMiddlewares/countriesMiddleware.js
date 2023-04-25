import { countriesNameSchema } from "../../schemas/countriesSchemas/countriesSchemas.js";
import httpStatus from "http-status";

export default function infoCountriesMiddleware (req, res, next){
    const { country } = req.params;

    const validation = countriesNameSchema.validate(
        {country},
        { abortEarly: false } ); 
    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        console.log(errors)
        return res.status(httpStatus.BAD_REQUEST).send(errors);
    };

    res.locals.country =  country;
    next();
    
}