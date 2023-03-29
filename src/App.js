import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Game from "./Routes/Game/Game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="Game" element={<Game></Game>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
