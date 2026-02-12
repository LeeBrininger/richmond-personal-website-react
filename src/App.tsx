import "./App.css";
import "./styles/Icons.css";
import "./styles/HeaderBar.css";
import "./styles/TabComponent.css";
import "./styles/LandingPage.css";
import "@fontsource/lora";
import "@fontsource/montserrat";
import "@fontsource/quantico";
import "maplibre-gl/dist/maplibre-gl.css";

import RoutePage from "./components/RoutePage.tsx";
import HeaderBar from "./components/HeaderBar.tsx";

function App() {
  return (
    <div>
      <RoutePage />
    </div>
  );
}

export default App;
