
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import More from './components/More';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Home /></Route>
          <Route exact path="/about"> <About /></Route>
          <Route exact path="/contact"> <Contact /></Route>
          <Route exact path="/more"> <More/> </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
