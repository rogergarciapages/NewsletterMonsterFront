// src/schemas/userSchema.ts
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  company_name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords don’t match',
  path: ['confirmPassword'],
});

export type UserSchema = z.infer<typeof userSchema>;
