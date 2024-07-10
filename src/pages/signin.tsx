import { getProviders, signIn } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-6">Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)} className="btn btn-primary mb-2">
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
