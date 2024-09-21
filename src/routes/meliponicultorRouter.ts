import { Router } from "express";
import MeliponicultorController from "../controllers/meliponicultor.controller";

const controller = new MeliponicultorController();

const meliponicultorRouter = Router();

meliponicultorRouter.get('/meliponicultor', controller.findAll.bind(controller));
meliponicultorRouter.get('/meliponicultor/:id', controller.findById.bind(controller));
meliponicultorRouter.post('/meliponicultor', controller.save.bind(controller));
meliponicultorRouter.put('/meliponicultor/:id', controller.update.bind(controller));
meliponicultorRouter.delete('/meliponicultor/:id', controller.deleteById.bind(controller));

export default meliponicultorRouter;