import IMeliponicultor from "../interfaces/IMeliponicultor";
import MeliponicultorRepository from "../repositories/meliponicultor.repository";
import { resp, respM } from "../utils/resp";
import schema from "./validations/schema";

class MeliponicultorService {
    private repository = new MeliponicultorRepository();

    async findAll() {
        const meliponicultors = await this.repository.findAll();
        return resp(200, meliponicultors);
    }

    async save(meliponicultor: IMeliponicultor) {
        const { error } = schema.meliponicultor.validate(meliponicultor);
        if (error) return respM(400, error.message);
        const createdMeliponicultor = await this.repository.save(meliponicultor);
        return resp(201, createdMeliponicultor);
    }

    async findById(id: number) {
        const foundedMeliponicultor = await this.repository.findById(id);

        if (!foundedMeliponicultor) return respM(404, `Meliponicultor Id: ${id} not found`);

        return resp(200, foundedMeliponicultor);
    }

    async update(id: number, meliponicultor: IMeliponicultor) {
        const updatedMeliponicultor = await this.repository.update(id, meliponicultor);

        if (!updatedMeliponicultor) return respM(404, `Meliponicultor Id: ${id} not found`);

        return resp(200, updatedMeliponicultor);
    }

    async deleteById(id: number) {
        const success = await this.repository.deleteById(id);

        if (!success) return respM(404, `Meliponicultor Id: ${id} not found`);

        return respM(204, '');
    }
}

export default MeliponicultorService;