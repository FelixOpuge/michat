import React from 'react'
import { Card } from '../../components/ui/card'

interface ConversationContainerProps {
    children: React.ReactNode
}

const ConversationContainer = ({children}: ConversationContainerProps) => {
  return (
    <Card className='w-full h-[calc(100vh-32px)] lg:h-full p-2 flex flex-col gap-2'>
        {children}
    </Card>
  )
}

export default ConversationContainer
