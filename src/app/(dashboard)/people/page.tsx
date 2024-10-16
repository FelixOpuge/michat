import ItemList from '@/components/itemList/ItemList'
import ConversationFallback from '@/features/conversation/ConversationFallback'


const PeoplesPage = () => {
  return (
    <>
      <ItemList title='Contacts'>
        Contacts Page
      </ItemList>
      <ConversationFallback />
    </>
  )
}

export default PeoplesPage
