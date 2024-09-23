import { Router } from "express";
import BaitController from "../controllers/bait.controller";

const controller = new BaitController();
const baitRouter = Router();

baitRouter.get('/', controller.findAll.bind(controller));
baitRouter.get('/:id', controller.findById.bind(controller));
baitRouter.post('/', controller.save.bind(controller));
baitRouter.put('/:id', controller.update.bind(controller));
baitRouter.delete('/:id', controller.deleteById.bind(controller));

export default baitRouter;
