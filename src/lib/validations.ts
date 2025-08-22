import { z } from "zod";

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

// Member schemas
export const membershipSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  cpf: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  profession: z.string().optional(),
  company: z.string().optional(),
  membershipType: z.enum(["ASSOCIATE", "COLLABORATOR", "HONORARY"]),
});

// Contact schema
export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

// Post schemas
export const postSchema = z.object({
  title: z.string().min(5, "Título deve ter pelo menos 5 caracteres"),
  content: z.string().min(10, "Conteúdo deve ter pelo menos 10 caracteres"),
  excerpt: z.string().optional(),
  category: z.enum(["NEWS", "EVENT", "ANNOUNCEMENT", "GENERAL"]),
  imageUrl: z.string().url().optional(),
  published: z.boolean().default(false),
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type MembershipInput = z.infer<typeof membershipSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type PostInput = z.infer<typeof postSchema>;
