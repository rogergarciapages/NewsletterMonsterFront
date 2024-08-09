import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState, FC } from "react";
import { useTheme } from "next-themes";
import { Gdpr } from "@/assets/svg";

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
              Mailchimp is GDPR compliant. Learn more about how you can use Mailchimp in a GDPR compliant way.
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
                Sign in <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full flex items-center text-md justify-center bg-indigo-900 px-4 py-6 border border-gray-500 rounded-md text-white hover:bg-secondary hover:border-gray-200 dark:text-white dark:hover:border-indigo-900 hover:text-white transition duration-300" onClick={() => signIn("google")}>
                <ChromeIcon className="mr-2 ml-2 h-4 w-4" />
                Sign in with Google
              </Button>
              <Button variant="outline" className="w-full flex items-center text-md justify-center bg-[#7289da] px-4 py-6 border border-gray-500 rounded-md text-white dark:hover:border-indigo-900 hover:bg-secondary hover:border-indigo-900 hover:text-white transition duration-300" onClick={() => signIn("discord")}>
                <DiscordIcon className="mr-2 ml-2 h-4 w-4" />
                Sign in with Discord
              </Button>
              <Button variant="outline" className="w-full flex items-center text-md justify-center bg-[#0077b5] px-4 py-6 border border-gray-500 rounded-md text-white dark:hover:border-indigo-900 hover:bg-secondary hover:border-indigo-900 hover:text-white transition duration-300" onClick={() => signIn("linkedin")}>
                <LinkedInIcon className="mr-2 ml-2 h-4 w-4" />
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

const ArrowRightIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white ml-2"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChromeIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-google">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
  </svg>
);

const DiscordIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-discord">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
  </svg>
);

const LinkedInIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
);

export default LoginBlock;
