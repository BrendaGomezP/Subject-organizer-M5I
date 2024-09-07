import { z } from "zod";

const usersSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre debe tener un MÍNIMO de 3 caracteres" })
    .max(20, { message: "El nombre debe tener un MAXIMO de 20 caracteres" }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email(),
});

export function usersValidator(data) {
  return usersSchema.safeParse(data);
}
