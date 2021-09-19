import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Books from "./component/Books";
import NavBar from "./component/NavBar"
import Home from "./component/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div class = "App">
    
    <Router>
      <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Books" component={Books}>
            <Books />
          </Route>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/idek">
            <Books />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
