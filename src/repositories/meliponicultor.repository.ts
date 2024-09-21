import { ModelStatic } from "sequelize";
import Meliponicultor from "../models/Meliponicultor";
import IMeliponicultor from "../interfaces/IMeliponicultor";

class MeliponicultorRepository {
    private model: ModelStatic<Meliponicultor> = Meliponicultor

    async findAll() {
        return await this.model.findAll();
    }

    async save(meliponicultor: IMeliponicultor) {
        const createdMeliponicultor = await this.model.create({ ...meliponicultor });
        return createdMeliponicultor;
    }

    async findById(id: number) {
        return await this.model.findByPk(id);
    }

    async update(id: number, meliponicultor: IMeliponicultor) {
        var foundedMeliponicultor = await this.model.findByPk(id);

        foundedMeliponicultor?.update({ ...meliponicultor });
        foundedMeliponicultor?.save();

        return foundedMeliponicultor;
    }

    async deleteById(id: number) {
        return await this.model.destroy({
            where: {
                id: id
            }
        });
    }
}

export default MeliponicultorRepository;