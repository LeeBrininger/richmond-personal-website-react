import './App.css'
import WorkSection from "./components/WorkSection.tsx";
import Sidebar from "./components/SideBar.tsx";



function App() {

  return (
      <>
          <Sidebar/>
          <h1>Richmond Brininger</h1>
          <h2>Senior Fullstack Developer</h2>
          <WorkSection title="RTX" description="Stuff"/>
      </>
  )
}

export default App
