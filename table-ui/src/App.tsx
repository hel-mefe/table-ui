import Navbar from "./components/navbar"
import { navigationItems } from "./features/navigation/navigation-items.config"
import { mockProfile1, mockProfile2 } from "./features/profile/profile.data"

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Navbar
        items={navigationItems}
        profile={mockProfile2}
      />
    </div>
  )
}

export default App