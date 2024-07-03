import { Button } from '@/components/ui/button';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const AuthButtons = () => {
  return  <div className='flex  gap-3 flex-1 md:flex-row flex-col'>

    <RegisterLink><Button>Sign Up</Button></RegisterLink> 
    <LoginLink><Button>Log in</Button></LoginLink> 
  </div>
};

export default AuthButtons