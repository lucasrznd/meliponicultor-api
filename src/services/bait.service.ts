import IBait from "../interfaces/IBait";
import BaitRepository from "../repositories/bait.repository";
import { resp, respM } from "../utils/resp";
import schema from "./validations/schema";

class BaitService {
    private repository = new BaitRepository();

    async findAll() {
        const bait = await this.repository.findAll();
        return resp(200, bait);
    }

    async save(bait: IBait) {
        const { error } = schema.bait.validate(bait);
        if (error) return respM(400, error.message);
        const createdBait = await this.repository.save(bait);
        return resp(201, createdBait);
    }

    async findById(id: number) {
        const foundedBait = await this.repository.findById(id);

        if (!foundedBait) return respM(404, `Isca Id: ${id} not found`);

        return resp(200, foundedBait);
    }

    async update(id: number, bait: IBait) {
        const updatedBait = await this.repository.update(id, bait);

        if (!updatedBait) return respM(404, `Isca Id: ${id} not found`);

        return resp(200, updatedBait);
    }

    async deleteById(id: number) {
        const success = await this.repository.deleteById(id);

        if (!success) return respM(404, `Isca Id: ${id} not found`);

        return respM(204, '');
    }
}

export default BaitService;