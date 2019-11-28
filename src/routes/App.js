import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Results from "../containers/Results";
import Details from "../containers/Details";
import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/resultados" component={Results} />
      <Route exact path="/ticket" component={Details} />
    </Layout>
  </BrowserRouter>
);

export default App;
