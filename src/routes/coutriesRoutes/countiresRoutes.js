import { Router } from "express";
import getInfoCountries from "../../controllers/countriesControllers/countriesControllers.js";
import infoCountriesMiddleware from "../../middlewares/countriesMiddlewares/countriesMiddleware.js";

const countriesRoute = Router();

countriesRoute.get("/:country", infoCountriesMiddleware ,getInfoCountries);

export default countriesRoute;