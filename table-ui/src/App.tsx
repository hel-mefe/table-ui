import { MainLayout } from "./layouts/MainLayout"
import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import { WaitlistView } from "./features/waitlist"
import { navigationItems } from "./features/navigation/navigation-items.config"
import { mockProfile1 } from "./features/profile/profile.data"
import { useTheme } from "@emotion/react"

export default function App() {
  const t = useTheme()

  return (
    <MainLayout
      navbar={<Navbar items={navigationItems} profile={mockProfile1} />}
      sidebar={<Sidebar />}
    >
      <WaitlistView />
    </MainLayout>
  )
}
