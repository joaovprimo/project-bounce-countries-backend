import httpStatus from "http-status";
import axios from "axios";

export default async function getInfoCountries (req,res){
    const {country} = res.locals;
    console.log(country);
    try{
        console.log("testing");
        const data = await axios.get(`https://restcountries.com/v3.1/translation/${country}`);
        const info = data.data;
        return res.status(httpStatus.OK).send(info);
    }
    catch(err){
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}