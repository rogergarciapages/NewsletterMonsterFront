// C:\Users\Usuario\Documents\GitHub\nm3\src\components\home\auth-screen\RegisterForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, UserSchema } from '../../../../src/schemas/userSchema';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: UserSchema) => {
    setServerError(null);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
      alert('User registered successfully');
    } catch (error) {
      setServerError((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Surname</label>
        <input {...register('surname')} />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>
      <div>
        <label>Company Name</label>
        <input {...register('company_name')} />
        {errors.company_name && <p>{errors.company_name.message}</p>}
      </div>
      <div>
        <label>Username</label>
        <input {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit">Register</button>
      {serverError && <p>{serverError}</p>}
    </form>
  );
};

export default RegisterForm;
