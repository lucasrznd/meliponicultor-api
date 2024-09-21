import { Router } from "express";
import meliponicultorRouter from "./meliponicultorRouter";

const router = Router();

router.use(meliponicultorRouter);

export default router;