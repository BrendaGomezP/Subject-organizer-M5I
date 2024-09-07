import { writeFile, readFile } from "jsonfile";

class AuthModel {
    static async write(data) {
        try {
            await writeFile("./src/db/auth.json", data);
            return true;
        } catch (error) {
            throw error;
        }
    }

    static async read() {
        try {
            const db = await readFile("./src/db/auth.json");
            return db;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthModel;
