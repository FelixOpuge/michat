import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { SignInFlow } from '../authTypes'
import { useAuthActions } from '@convex-dev/auth/react'
import { TriangleAlert } from 'lucide-react'

interface SignInProps {
  setState: (state: SignInFlow) => void
}

const SignInCard = ({ setState }: SignInProps) => {

  const { signIn } = useAuthActions()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState('');

  const onProviderSignIn = (value: "google") => {
    setLoading(true)
    signIn(value).finally(
      () => setLoading(false)
    )
  }

  const onEmailSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    signIn('password', { email, password, flow: 'signIn' })
      .catch(() => {
        setError('Invalid email or password')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Card className='h-full w-full p-8'>
        <CardHeader className='px-0 pt-0'>
          <CardTitle>
            Login to MICHAT
          </CardTitle>
          <CardDescription>
          Use your email or another service to continue
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
            <TriangleAlert className='size-4' />
            <p>
              {error}
            </p>
          </div>
        )}
        <CardContent className='space-y-5 px-0 pb-0'>
          <form onSubmit={onEmailSignIn} className='space-y-2.5'>
            <Input
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              type='email'
              required
            />
            <Input
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
              onClick={() => onProviderSignIn('google')}
            >
              <FcGoogle className='size-5 absolute top-2.5 left-2.5' />
              Login with google
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