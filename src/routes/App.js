import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Footer from "../components/Footer";
import Results from "../containers/Results";
import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/resultados" component={Results} />
    </Layout>
  </BrowserRouter>
);

export default App;
