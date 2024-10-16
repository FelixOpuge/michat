import ItemList from '@/components/itemList/ItemList'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}
const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <>
      <ItemList title='Messages'>
        Conversation Page
      </ItemList>
      {children}
    </>
  )
}

export default LayoutPage
