import SubjectsModel from "../model/subjects"

// interfaces
import { Subjects } from "../interfaces/subjects"
// schemas
import { subjectsValidator } from "../schemas/subjects"
// uuid
import { v4 as uuidv4 } from "uuid"
// average function
import { average } from "../utils/average"

class SubjectsService {
    static async getAll(where) {
        try {
            const { subjects } = await SubjectsModel.read();
            if (Object.keys(where).length == 0) {
                return subjects
            }

            const subjectsFiltered = subjects.filter((subject) => subject.subject.includes(where.subject))

            return subjectsFiltered

        } catch (error) {
            throw error
        }
    }

    static async create(data: Subjects) {
        try {
            const subjectsDb = await SubjectsModel.read()
            const result = subjectsValidator(data)
            if (!result.success) {
                const error = new Error("Datos invalidos");
                error["statusCode"] = 400

                throw error
            }
            const subject = result.data
            const id = uuidv4()
            const newSubject = {
                id: id,
                subject: subject.subject,
                estate: subject.estate,
                exam1: subject.exam1,
                exam2: subject.exam2,
                final: subject.final,
                calification1: subject.calification1,
                calification2: subject.calification2,
                average: average(subject.average, subject.average),
                tp1: subject.tp1,
                tp2: subject.tp2,
                note: subject.note

            }

            subjectsDb.subjects.push(newSubject)
            await SubjectsModel.write(subjectsDb)

            return newSubject



        } catch (error) {
            throw error

        }
    }
    static async updateById(id: string, data: Subjects) {
        try {
            const db = await SubjectsModel.read();

            let subjects = db.subjects.map((subject) => {
                if (subject.id == id) { return { ...subject, ...data } }
                else return subject
            })


            if (!subjects) {
                const error = new Error("Materia no encontrada");
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
            if(!id){
                const error = new Error("El id es requerido");
                error["statusCode"] = 400; 
            }
            const db = await SubjectsModel.read()
            const subjects = db.subjects.filter((subject) => subject.id != id)
            if (db.subjects.length == subjects.length) {
                const error = new Error("Materia no encontrada");
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