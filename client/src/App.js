import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
