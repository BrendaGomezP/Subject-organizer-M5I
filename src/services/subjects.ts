import SubjectsModel from "../model/subjects"

// interfaces
import { Subjects } from "../interfaces/subjects"
// schemas
import { subjectsValidator } from "../schemas/subjects"
// uuid
import { v4 as uuidv4 } from "uuid"

class SubjectsService {
    static async getAll(where) {
        try {


        } catch (error) {
            throw error
        }
    }
    static async getById(id) {
        try {


        } catch (error) {
            throw error

        }
    }
    static async create(data: Subjects) {
        try { const subjectsDb = await SubjectsModel.read()
            const result = subjectsValidator(data)
            if(!result.success){ return false}
            const subject = result.data
            const id = uuidv4()
            subjectsDb.subjects.push({
                id: id,
                subject: data.subject,
                estate: data.estate,
                exam1: data.exam1,
                exam2: data.exam2,
                final: data.final,
                calification1: data.calification1,
                calification2: data.calification2,
                average: data.average,
                tp1: data.tp1,
                tp2: data.tp2,
                note: data.note
            
            })
            SubjectsModel.write(subjectsDb)

            return subject



        } catch (error) {
            throw error

        }
    }
    static async updateById(id) {
        try {

        } catch (error) {
            throw error

        }
    }
    static async deleteById(id) {
        try {

        } catch (error) {
            throw error

        }

    }
}

export default SubjectsService