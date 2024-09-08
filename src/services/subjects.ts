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

            const { subjects } = await SubjectsModel.read();


            const subjectsFiltered = subjects.filter((subject) => subject.subject.includes(where.subject))

            return subjectsFiltered

        } catch (error) {
            throw error
        }
    }

    static async create(data: Subjects) {
        try {
            const subjectsDb = await SubjectsModel.read()
            // const result = subjectsValidator(data) // no puedo
            // if(!result.success){
            //     const error = new Error("Datos invalidos");
            //     error["statusCode"] = 400

            //     throw error
            // }
            // const subject = result.data
            const id = uuidv4()
            const newSubject = {
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

            }
            subjectsDb.subjects.push(newSubject)
            SubjectsModel.write(subjectsDb)

            return newSubject



        } catch (error) {
            throw error

        }
    }
    static async updateById(id:string, data: Subjects) {
        try {
            const db = await SubjectsModel.read();

            let subjects = db.subjects.map((subject) => {
                if (subject.id == id) { return { ...subject, ...data } }
                else return subject})
            
            
      if (!subjects) {
        const error = new Error("Materia no encontrado");
        error["statusCode"] = 404;

        throw error;
      }

      db.subjects = subjects

      await SubjectsModel.write(db);

                   
        } catch (error) {
            throw error

        }
    }
    static async deleteById(id: string) {
        try {
            const db = await SubjectsModel.read()
            const subjects = db.subjects.filter((subject) => subject.id != id)
            if (db.subjects.length == subjects.length) {
                const error = new Error("Producto no encontrado");
                error["statusCode"] = 404;

                throw error;
            }
            db.subjects = subjects
            await SubjectsModel.write(db)

        } catch (error) {
            throw error

        }

    }
}

export default SubjectsService