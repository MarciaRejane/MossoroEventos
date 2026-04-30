import * as z from "zod";

export const userLoginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email é obrigatório")
    .email("Email invalido")
    .regex(
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
      "Email invalido",
    ),

  password: z
    .string()
    .trim()
    .nonempty("A Senha é obrigatório")
    .min(6, "A senha deve ter no minimo 6 caracteres")
    .regex(/[A-Z]/, { message: "Deve ter no minimo 1 letra maiúscula" })
    .regex(/[0-9]/, { message: "Deve ter pelo menos 1 número" }),
});

export type LoginFormData = z.infer<typeof userLoginSchema>;
