import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Home/>
    </Layout>
  </BrowserRouter>
);

export default App;