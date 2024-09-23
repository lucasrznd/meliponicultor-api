import { ModelStatic } from "sequelize";
import Bait from "../models/Bait";
import IBait from "../interfaces/IBait";


class BaitRepository{
    private model: ModelStatic<Bait> = Bait

    async findAll() {
        return await this.model.findAll();
    }

    async save(bait: IBait) {
        const createdBait = await this.model.create({ ...bait });
        return createdBait ;
    }

    async findById(id: number) {
        return await this.model.findByPk(id);
    }

    async update(id: number, bait: IBait) {
        var foundedBait = await this.model.findByPk(id);

        foundedBait?.update({ ...bait });
        foundedBait?.save();

        return foundedBait;
    }

    async deleteById(id: number) {
        return await this.model.destroy({
            where: {
                id: id
            }
        });
    }
}

export default BaitRepository;