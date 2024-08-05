// C:\Users\Usuario\Documents\GitHub\nm3\src\components\home\auth-screen\AuthScreen.tsx
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FaGoogle, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import RegisterForm from './RegisterForm';

const AuthScreen: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {isRegistering ? (
        <div>
          <h1 className="text-4xl font-bold mb-8">Register</h1>
          <RegisterForm />
          <p>
            Already have an account?{' '}
            <button
              className="text-blue-500 underline"
              onClick={() => setIsRegistering(false)}
            >
              Sign In
            </button>
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-8">Sign In</h1>
          <button
            onClick={() => signIn('google')}
            className="flex items-center mb-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
          <button
            onClick={() => signIn('github')}
            className="flex items-center mb-4 px-4 py-2 bg-gray-800 text-white rounded"
          >
            <FaGithub className="mr-2" />
            Sign in with GitHub
          </button>
          <button
            onClick={() => signIn('linkedin')}
            className="flex items-center mb-4 px-4 py-2 bg-blue-700 text-white rounded"
          >
            <FaLinkedin className="mr-2" />
            Sign in with LinkedIn
          </button>
          <button
            onClick={() => signIn('email')}
            className="flex items-center mb-4 px-4 py-2 bg-gray-400 text-black rounded"
          >
            <FaEnvelope className="mr-2" />
            Sign in with Email
          </button>
          <p>
            Don’t have an account?{' '}
            <button
              className="text-blue-500 underline"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthScreen;
