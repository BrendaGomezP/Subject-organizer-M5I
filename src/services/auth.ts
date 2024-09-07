import UsersService from "./users";
import AuthModel from "../model/auth";

// uuid
import { v4 as uuidv4 } from "uuid";



// Hash
import createHash from "../utils/create-hash";
import { error } from "console";

class AuthService {
    static async register(data: {
        name: string;
        email: string;
        password: string;
    }) {
        try {
            const user = await UsersService.getByEmail(data.email)
            if (user){
                const error = new Error("Usuario ya registrado");
                error["statusCode"] = 400
        
                throw error
            };
            const userId = await UsersService.create({
                name: data.name,
                email: data.email,
            });
            if (userId == false) {
                throw error
            }
            const authDb = await AuthModel.read();
            const token = createHash(uuidv4());
            authDb.auth.push({
                id: uuidv4(),
                userId: userId,
                password: createHash(data.password),
                token: token
            })

            AuthModel.write(authDb);
            return token;

        } catch (error) {
            throw error
        }
    }
    static async login(data: {}) {
        try {

        } catch (error) {
            throw error

        }
    }
}

export default AuthService