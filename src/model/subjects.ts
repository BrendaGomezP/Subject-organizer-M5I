import { writeFile, readFile } from "jsonfile";

class SubjectsModel {
    static async write(data) {
        try {
            await writeFile("./src/db/subjects.json", data);
            return true;
        } catch (error) {
            throw error;
        }
    }

    static async read() {
        try {
            const db = await readFile("./src/db/subjects.json");
            return db;
        } catch (error) {
            throw error;
        }
    }
}

export default SubjectsModel;
