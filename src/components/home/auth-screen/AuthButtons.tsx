// src/components/home/auth-screen/AuthButtons.tsx
import { signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

interface AuthButtonsProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ providers }) => {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)} className="btn btn-primary">
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
};

export default AuthButtons;
