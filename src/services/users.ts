import UsersModel from "../model/users";

// uuid
import { v4 as uuidv4 } from "uuid";


// Schema
import { usersValidator } from "../schemas/users";
import { any } from "zod";

class UsersService {
    static async create(data: { name: string, email: string }) {
        try {
            const usersDb = await UsersModel.read();
            const result = usersValidator(data);

            if (!result.success) { return false }
            const user = result.data
            const id = uuidv4();
            usersDb.users.push({ id: id, email: user.email, name: user.name });

            UsersModel.write(usersDb);
            return id;

        } catch (error) {
            throw error
        }
    }

    static async read() {
        try {
            const db = await UsersModel.read();

            return db;
        } catch (error) {
            throw error;
        }
    }
    static async getByEmail(email) {
        try {
          const db = await UsersService.read();
    
          const user = db.users.find((user) => email == user.email);
          return user;
        } catch (error) {
          throw error;
        }
      }



}

export default UsersService