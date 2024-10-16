import Desktop from "./navbar/Desktop"
import Mobile from "./navbar/Mobile"

interface SidebarWrapperProps {
  children: React.ReactNode
}
const SidebarWrapper = ({children}: SidebarWrapperProps) => {
  return (
    <div className="h-full w-full p-4 flex flex-col lg:flex-row gap-4">
      <Mobile />
      <Desktop />
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex gap-4">
      {children}
      </main>
    </div>
  )
}

export default SidebarWrapper
