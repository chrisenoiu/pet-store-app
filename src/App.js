import "./App.css";
import Home from "./Views/Home";
import Pet from "./Views/Pet";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="content">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pet/:id">
            <Pet />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
