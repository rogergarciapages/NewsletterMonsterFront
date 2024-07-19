import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const AuthButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = (provider: string) => {
    setLoading(true);
    signIn(provider, { callbackUrl: '/dashboard' });
  };

  return (
    <div className='flex flex-col items-center gap-3 w-full'>
      <Button
        className='w-full bg-primary flex items-center justify-center dark:text-white'
        variant={"outline"}
        disabled={loading}
        onClick={() => handleSignIn('github')}
      >
        <img src="/icons/github.svg" alt="GitHub" className='mr-2 icon' width="24" height="24" />
        Log in with GitHub
      </Button>
      <Button
        className='w-full bg-primary flex items-center justify-center'
        variant={"outline"}
        disabled={loading}
        onClick={() => handleSignIn('google')}
      >
        <img src="/icons/google.svg" alt="Google" className='mr-2 icon' width="24" height="24" />
        Log in with Google
      </Button>
      <div className='mt-4 w-full'>
        <p className='text-white text-sm font-light'>
          Don't have an account? <a href="/auth/signup" className="font-medium text-primary hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default AuthButtons;
