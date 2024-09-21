import { NextFunction, Request, Response } from "express";
import MeliponicultorService from "../services/meliponicultor.service";

class MeliponicultorController {
    private service = new MeliponicultorService();

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.findAll();
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.save(req.body);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.findById(+req.params.id);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.update(+req.params.id, req.body);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.deleteById(+req.params.id);
            res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export default MeliponicultorController;