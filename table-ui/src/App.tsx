import Navbar from "./components/navbar"
import { navigationItems } from "./features/navigation/navigation-items.config"
import { mockProfile } from "./features/profile/profile.data"

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Navbar
        items={navigationItems}
        profile={mockProfile}
      />
    </div>
  )
}

export default App