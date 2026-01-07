import './App.css'
import './styles/Icons.css'
import './styles/HeaderBar.css'
import './styles/SideBar.css'
import './styles/Tabs.css'
import './styles/LandingPage.css'
import Sidebar from "./components/SideBar.tsx";
import HeaderBar from "./components/HeaderBar.tsx";
import TabsSection from "./components/TabsSection.tsx";

function App() {
  return (
      <div className="app-background">
          <Sidebar/>
          <div className="mainContainer">
              <HeaderBar/>
              <div className="cornerGoblin layer1"></div>
              <div className="cornerGoblin layer2"></div>
              <TabsSection/>
          </div>
      </div>
  )
}

export default App
