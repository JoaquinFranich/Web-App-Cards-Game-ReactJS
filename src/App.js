<<<<<<< HEAD
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Game from "./Routes/Game/Game";

/* import CreateCard from "./routes/Card/CreateCard";
import Login from "./routes/Login/Login"; */

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
=======
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import PageNotFound from './routes/PageNotFound';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
>>>>>>> a4fa71e05a012c20756889b382f478cb46015044
  );
}

export default App;
