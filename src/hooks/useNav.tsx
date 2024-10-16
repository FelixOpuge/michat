import { MessageSquare, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useNavigation = () => {
    const pathname = usePathname()

    const paths = useMemo(() => [
        {
            name: 'Conversations',
            href: '/conversations',
            icon: <MessageSquare />,
            active: pathname.startsWith('/conversations')
        },
        {
            name: 'People',
            href: '/people',
            icon: <Users />,
            active: pathname.startsWith('/people')
        }
    ], [pathname])

    return paths
}