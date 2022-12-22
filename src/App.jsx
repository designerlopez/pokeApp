import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeProtected from "./components/HomeProtected";
import RoutedProtected from "./components/RouteProtected";
import Footer from "./Layout/Footer";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RoutedProtected />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
