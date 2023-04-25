import { Router } from "express";
import countriesRoute from "./coutriesRoutes/countiresRoutes.js"

const Routes = Router();

Routes.use("/countries", countriesRoute );

export default Routes;