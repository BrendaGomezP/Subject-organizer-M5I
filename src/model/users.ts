import { writeFile, readFile } from "jsonfile";

class UsersModel {
    static async write(data) {
        try {
            await writeFile("./src/db/users.json", data);
            return true;
        } catch (error) {
            throw error;
        }
    }

    static async read() {
        try {
            const db = await readFile("./src/db/users.json");
            return db;
        } catch (error) {
            throw error;
        }
    }
}

export default UsersModel;
