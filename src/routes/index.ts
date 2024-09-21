import { Router } from "express";
import meliponicultorRouter from "./meliponicultorRouter";
import baitRouter from "./baitRouter";

const router = Router();

router.use('/meliponicultor', meliponicultorRouter);
router.use('/bait', baitRouter);

export default router;
