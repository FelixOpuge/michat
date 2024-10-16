import SidebarWrapper from "@/components/sidebar/SidebarWrapper"

interface DashLayoutProps {
    children: React.ReactNode
}
const LayoutPage = ({ children }: DashLayoutProps) => {
  return (
    <SidebarWrapper>
      {children}
    </SidebarWrapper>
  )
}

export default LayoutPage
