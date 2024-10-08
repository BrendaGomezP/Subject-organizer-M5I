import { z } from "zod";

const subjectsSchema = z.object({
    subject: z
        .string({
            required_error: "El nombre de la materia es requerido"
        })
        .min(3, { message: "El nombre debe tener un MÍNIMO de 3 caracteres" })
        .max(20, { message: "El nombre debe tener un MAXIMO de 20 caracteres" }),
    estate: z
        .string({
            required_error: "el estado de la materia es requerido"
        }).max(10, { message: "El estado debe tener un MAXIMO de 10 caracteres" }),
    exam1: z
        .string({
            required_error: "La fecha del primer examen es requerida",
            invalid_type_error: "La fecha debe estar en el sig. formato 'YYYY-MM-DD'"
        }).date(),
    exam2: z
        .optional(z.string({
            invalid_type_error: "La fecha debe estar en el sig. formato 'YYYY-MM-DD'"
        }).date()),
    final: z.optional(z.string({
        invalid_type_error: "La fecha debe estar en el sig. formato 'YYYY-MM-DD'"
    }).date()),
    calification1: z
        .number({
            invalid_type_error: "Calificación es un número"
        }),
        calification2: z
        .optional(z.number({
            invalid_type_error: "Calificación es un número"
        })),
    average: z
        .optional(z.number({
            invalid_type_error: "Para obtener el promedio de ingresar números"
        })),
    tp1: z
        .optional(z.string({
        }).max(10, { message: "El estado del tp debe tener un MAXIMO de 10 caracteres" })),
    tp2: z
        .optional(z.string({
        }).max(10, { message: "El estado del tp debe tener un MAXIMO de 10 caracteres" })),
    note: z
        .optional(z.string({
        }).max(20, { message: "La notadebe tener un MAXIMO de 20 caracteres" })),



});

export function subjectsValidator(data) {
    return subjectsSchema.safeParse(data);
}