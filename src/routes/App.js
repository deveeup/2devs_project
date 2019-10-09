import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <h1>test</h1>
    </Layout>
  </BrowserRouter>
);

export default App;