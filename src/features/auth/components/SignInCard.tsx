import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SignInFlow } from '../authTypes'

interface SignInProps {
  setState: (state: SignInFlow) => void
}

const SignInCard = ({ setState }: SignInProps) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card className='h-full w-full p-8'>
        <CardHeader className='px-0 pt-0'>
          <CardTitle>
            Login to continue
          </CardTitle>
          <CardDescription>
          Use your email or another service to continue
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-5 px-0 pb-0'>
          <form action="" className='space-y-2.5'>
            <Input
              disabled={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              type='email'
              required
            />
            <Input
              disabled={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              type='password'
              required
            />
            <Button
              type= 'submit'
              className='w-full'
              size='lg'
              disabled={false}
            >
              Login
            </Button>
          </form>
          <Separator />
          <div className='flex flex-col gap-y-3'>
            <Button
              variant='outline'
              className='w-full relative'
              size='lg'
              disabled={false}
              onClick={() => {}}
            >
              <FcGoogle className='size-5 absolute top-2.5 left-2.5' />
              Login with google
            </Button>
            <Button
              variant='outline'
              className='w-full relative'
              size='lg'
              disabled={false}
              onClick={() => {}}
            >
              <FaFacebook className='size-5 absolute top-2.5 left-2.5 text-sky-700' />
              Login with facebook
            </Button>
          </div>
          <p className='text-xs text-muted-foreground'>
            Don&apos;t have an account? <span onClick={() =>setState('signUp')} className='text-sky-700 cursor-pointer hover:underline'>Sign Up</span> 
          </p>
        </CardContent>
    </Card>
  )
}

export default SignInCard