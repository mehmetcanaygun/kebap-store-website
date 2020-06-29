import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteState from "./context/SiteState";

import Loading from "./components/layout/Loading";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Kebap from "./components/pages/Kebap";
import Pide from "./components/pages/Pide";
import Izgara from "./components/pages/Izgara";
import Tatli from "./components/pages/Tatli";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

import "./css/style.css";

function App() {
  return (
    <SiteState>
      <Router>
        <div className="App">
          <Loading />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hakkimizda" component={About} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/kebap" component={Kebap} />
            <Route exact path="/pide" component={Pide} />
            <Route exact path="/izgara" component={Izgara} />
            <Route exact path="/tatli" component={Tatli} />
            <Route exact path="/iletisim" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </SiteState>
  );
}

export default App;
