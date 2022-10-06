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
  );
}

export default App;
