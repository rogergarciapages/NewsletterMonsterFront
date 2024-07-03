"use client"
import { Button } from '@/components/ui/button';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from 'react';


const AuthButtons = () => {
    const [loading, setloading] = useState(false);
  return  <div className='flex  gap-3 flex-1 md:flex-row flex-col'>

    <RegisterLink className='flex-1' onClick={() => setloading(true)}>
        <Button className='w-full bg-primary' variant={"outline"} disabled={loading}>
            Sign Up
            </Button>
            </RegisterLink> 
    <LoginLink className='flex-1' onClick={() => setloading(true)}>
        <Button className='w-full bg-secondary' variant={"outline"} disabled={loading}>
            Log in
            </Button>
            </LoginLink> 
  </div>
};

export default AuthButtons