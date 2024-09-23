import { Router } from "express";
import MeliponicultorController from "../controllers/meliponicultor.controller";

const controller = new MeliponicultorController();
const meliponicultorRouter = Router();

meliponicultorRouter.get('/', controller.findAll.bind(controller));
meliponicultorRouter.get('/:id', controller.findById.bind(controller));
meliponicultorRouter.post('/', controller.save.bind(controller));
meliponicultorRouter.put('/:id', controller.update.bind(controller));
meliponicultorRouter.delete('/:id', controller.deleteById.bind(controller));

export default meliponicultorRouter;
