import { z } from "zod";

const authRegisterSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre debe tener un MÍNIMO de 3 caracteres" })
    .max(20, { message: "El nombre debe tener un MAXIMO de 20 caracteres" }),
  email: z
    .string({
      required_error: "El email es requerido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, { message: "El nombre debe tener un MÍNIMO de 6 caracteres" })
    .max(8, { message: "El nombre debe tener un MAXIMO de 8 caracteres" }),
});

export function registerValidator(data) {
  return authRegisterSchema.safeParse(data);
}
// login

const authLoginSchema = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email(),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, { message: "El nombre debe tener un MÍNIMO de 6 caracteres" })
    .max(8, { message: "El nombre debe tener un MAXIMO de 8 caracteres" }),
});

export function loginValidator(data) {
  return authLoginSchema.safeParse(data);
}