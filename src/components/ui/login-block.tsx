import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState, FC } from "react";
import { useTheme } from "next-themes";
import { DiscordIcon, Gdpr, GoogleIcon, LinkedInIcon, Arrowbigright } from "@/assets/svg";

interface LoginBlockProps {
  onRegisterClick: () => void;
}

const dotPatternStyleLight = `
  linear-gradient(90deg, #212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
  linear-gradient(#212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
  #222
`;

const dotPatternStyleDark = `
  linear-gradient(90deg, #212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
  linear-gradient(#212121 calc(50px - 1px), transparent 1%) center / 50px 50px,
  #fff
`;

export const LoginBlock: FC<LoginBlockProps> = ({ onRegisterClick }) => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false); // State for password visibility
  const { theme } = useTheme();

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const password = (event.target as any).password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/dashboard";
    }
  };

  const getBackgroundStyle = () => {
    return theme === "dark" ? dotPatternStyleDark : dotPatternStyleLight;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative flex items-center justify-center p-6 lg:p-12 dark:bg-none bg-none">
        <div className="relative max-w-[480px] space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-7xl text-primary">
              Welcome to Newsletter Monster!
            </h1>
            <p className="text-gray-700 dark:text-white text-lg leading-7 pb-5">
              Sign up and start expanding your newsletter reach today.
            </p>
            <p className="text-gray-700 dark:text-gray-400 md:text-s">
              By creating an account, you agree to our Terms and have read and acknowledge the Global Privacy Statement.
            </p>
            <p className="text-gray-700 dark:text-gray-400 md:text-s">
              Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.
            </p>
            <p className="text-gray-700 dark:text-gray-400 md:text-s">
              NewsletterMonster is GDPR compliant. Learn more about how you can use NewsletterMonster in a GDPR compliant way.
            </p>
            <Gdpr className="text-7xl text-gray-500" />      
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="mx-auto w-full max-w-[480px] space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Sign in to your account</h2>
            <p className="text-gray-700 dark:text-gray-200">Yep, you know what to do.</p>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="space-y-4">
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-md">Your email</Label>
                <Input id="email" type="email" placeholder="type email" required className="block placeholder-grey-50 w-full px-3 py-6 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-base" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-md"> Your password</Label>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} required className="block w-full px-3 py-6 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-base" />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full flex items-center text-md justify-center px-4 py-6 bg-primary text-white rounded-md hover:bg-muted transition duration-300">
                Sign in <Arrowbigright className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" className="w-full flex items-center text-md justify-center bg-indigo-900 px-4 py-6 border border-indigo-900 rounded-md text-white hover:bg-secondary hover:border-gray-200 dark:text-white dark:hover:border-indigo-900 hover:text-white transition duration-300" onClick={() => signIn("google")}>
                <GoogleIcon className="mr-4 ml-2 h-6 w-6" />
                Sign in with Google
              </Button>
              <Button variant="outline" className="w-full flex items-center text-md justify-center bg-[#7289da] px-4 py-6 border border-[#7289da] rounded-md text-white dark:hover:border-indigo-900 hover:bg-secondary hover:border-indigo-900 hover:text-white transition duration-300" onClick={() => signIn("discord")}>
                <DiscordIcon className="mr-4 ml-2 h-6 w-6" />
                Sign in with Discord
              </Button>
              <Button variant="outline" className="w-full flex items-center text-md justify-center bg-[#0077b5] px-4 py-6 border border-[#0077b5] rounded-md text-white dark:hover:border-indigo-900 hover:bg-secondary hover:border-indigo-900 hover:text-white transition duration-300" onClick={() => signIn("linkedin")}>
                <LinkedInIcon className="mr-4 ml-2 h-6 w-6" />
                Sign in with LinkedIn
              </Button>
            </form>
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-white">
            Don't have an account yet?{" "}
            <Link href="#" className="underline hover:text-primary" prefetch={false} onClick={onRegisterClick}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginBlock;
