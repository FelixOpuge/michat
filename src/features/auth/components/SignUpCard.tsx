import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { SignInFlow } from '../authTypes'
import { useAuthActions } from '@convex-dev/auth/react'
import { TriangleAlert } from 'lucide-react'
import { redirect } from 'next/navigation'

interface SignUpProps {
  setState: (state: SignInFlow) => void
}

const SignUpCard = ({ setState }: SignUpProps) => {

  const { signIn } = useAuthActions();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState('');

  const onEmailSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return;
    }

    setLoading(true)
    signIn('password', { name, email, password, flow: 'signUp' })
      .catch(() => {
        setError('Something went wrong')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onProviderSignUp = (value: 'google') => {
    setLoading(true)
    signIn(value)
      .finally(() => {
        setLoading(false)
        redirect('/')
      })
  }
  return (
    <Card className='h-full w-full p-8'>
        <CardHeader className='px-0 pt-0'>
          <CardTitle>
            Register to MICHAT
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
          <form onSubmit={onEmailSignUp} className='space-y-2.5'>
          <Input
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
              required
            />
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
            <Input
              disabled={loading}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
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
              disabled={false}
              onClick={() => onProviderSignUp('google')}
            >
              <FcGoogle className='size-5 absolute top-2.5 left-2.5' />
              Register with google
            </Button>
          </div>
          <p className='text-xs text-muted-foreground'>
            Already have an account? <span onClick={() =>setState('signIn')} className='text-sky-700 cursor-pointer hover:underline'>Sign In</span> 
          </p>
        </CardContent>
    </Card>
  )
}

export default SignUpCard