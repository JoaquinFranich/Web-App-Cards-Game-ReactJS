import "./App.css";
import { CardContext } from "./Context/CardContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Game from "./Routes/Game/Game";

/* import CreateCard from "./routes/Card/CreateCard";
import Login from "./routes/Login/Login"; */

console.log(CardContext);

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
)}

export default App;
